<?php
// ============================================================
// setup.php — One-time: create database, tables, sample data
// Run once: http://yoursite/admin-panel/setup.php?token=setup_waf_2026
// DELETE THIS FILE after running on production!
// ============================================================
require_once __DIR__ . '/config.php';

$token = $_GET['token'] ?? '';
if (php_sapi_name() !== 'cli' && $token !== 'setup_waf_2026') {
    http_response_code(403);
    die('<div style="font:14px monospace;padding:3rem;background:#0f172a;color:#ef4444;">403 — Add ?token=setup_waf_2026 to run setup.</div>');
}

$db   = getDB();
$msgs = [];

// ── 1. Create database ──
$db->query("CREATE DATABASE IF NOT EXISTS `waf_monitor` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
$db->query("USE `waf_monitor`");
$msgs[] = ['ok', '✅ Database `waf_monitor` ready'];

// ── 2. access_logs ──
$db->query("
    CREATE TABLE IF NOT EXISTS `access_logs` (
        `id`          INT UNSIGNED     AUTO_INCREMENT PRIMARY KEY,
        `ip_address`  VARCHAR(45)      NOT NULL,
        `username`    VARCHAR(100)     DEFAULT NULL,
        `action`      VARCHAR(50)      NOT NULL COMMENT 'login_attempt|login_failed|login_success|page_visit|manual_block',
        `status`      VARCHAR(20)      NOT NULL COMMENT 'success|failed|blocked|visit',
        `user_agent`  VARCHAR(500)     DEFAULT NULL,
        `request_uri` VARCHAR(500)     DEFAULT NULL,
        `created_at`  TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP,
        INDEX `idx_ip`      (`ip_address`),
        INDEX `idx_status`  (`status`),
        INDEX `idx_created` (`created_at`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
");
$msgs[] = ['ok', '✅ Table `access_logs` ready'];

// ── 3. ip_blacklist (One-to-Many ← access_logs.ip_address) ──
$db->query("
    CREATE TABLE IF NOT EXISTS `ip_blacklist` (
        `id`          INT UNSIGNED     AUTO_INCREMENT PRIMARY KEY,
        `ip_address`  VARCHAR(45)      NOT NULL UNIQUE,
        `reason`      VARCHAR(500)     NOT NULL DEFAULT 'Manually blocked by administrator',
        `blocked_by`  VARCHAR(50)      NOT NULL DEFAULT 'system',
        `blocked_at`  TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updated_at`  TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX `idx_ip` (`ip_address`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
");
$msgs[] = ['ok', '✅ Table `ip_blacklist` ready — linked to access_logs via ip_address (One-to-Many)'];

// ── 4. Sample data ──
$sampleData = [
    ['192.168.1.100', 'admin',  'login_failed',   'failed',  'Mozilla/5.0 (Windows NT 10.0) Chrome/120'],
    ['192.168.1.100', 'admin',  'login_failed',   'failed',  'Mozilla/5.0 (Windows NT 10.0) Chrome/120'],
    ['192.168.1.100', 'admin',  'login_failed',   'failed',  'Mozilla/5.0 (Windows NT 10.0) Chrome/120'],
    ['192.168.1.100', 'admin',  'login_failed',   'failed',  'Mozilla/5.0 (Windows NT 10.0) Chrome/120'],
    ['192.168.1.100', 'admin',  'login_failed',   'failed',  'Mozilla/5.0 (Windows NT 10.0) Chrome/120'],
    ['192.168.1.100', 'admin',  'login_failed',   'failed',  'Mozilla/5.0 (Windows NT 10.0) Chrome/120'],
    ['10.0.0.55',     'root',   'login_failed',   'failed',  'sqlmap/1.7.2#stable (https://sqlmap.org)'],
    ['10.0.0.55',     'admin',  'login_failed',   'failed',  'sqlmap/1.7.2#stable (https://sqlmap.org)'],
    ['10.0.0.55',     'admin',  'login_failed',   'failed',  'Nikto/2.1.6'],
    ['45.33.32.156',  null,     'login_attempt',  'visit',   'python-requests/2.31.0'],
    ['172.16.0.1',    'sabda26','login_success',  'success', 'Mozilla/5.0 (Macintosh) Safari/537.36'],
    ['127.0.0.1',     null,     'page_visit',     'visit',   'Mozilla/5.0 (Windows NT 10.0)'],
];

$stmt = $db->prepare("INSERT IGNORE INTO access_logs (ip_address,username,action,status,user_agent,request_uri) VALUES (?,?,?,?,?,?)");
foreach ($sampleData as $row) {
    $uri = '/admin-panel/login.php';
    $stmt->bind_param('ssssss', $row[0], $row[1], $row[2], $row[3], $row[4], $uri);
    $stmt->execute();
}
$stmt->close();
$msgs[] = ['ok', '✅ Sample access_logs inserted (' . count($sampleData) . ' rows)'];

// ── 5. Sample blacklist ──
$blData = [
    ['45.33.32.156', 'Auto-blocked: exceeded 5 failed login attempts',      'system'],
    ['10.0.0.55',    'Detected automated SQLi scanning tool (sqlmap)',       'system'],
];
$bs = $db->prepare("INSERT IGNORE INTO ip_blacklist (ip_address,reason,blocked_by) VALUES (?,?,?)");
foreach ($blData as $r) {
    $bs->bind_param('sss', $r[0], $r[1], $r[2]);
    $bs->execute();
}
$bs->close();
$msgs[] = ['ok', '✅ Sample ip_blacklist inserted (' . count($blData) . ' rows)'];
$msgs[] = ['warn', '⚠️ Delete this file (setup.php) before deploying to production!'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Setup — WAF Monitor</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family:'Inter',sans-serif;background:#030712;color:#f9fafb;display:flex;align-items:center;justify-content:center;min-height:100vh; }
        .box { background:rgba(15,23,42,.85);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2.5rem;max-width:560px;width:90%; }
        h2  { color:#a78bfa;margin-bottom:1.5rem;font-size:1.2rem; }
        p   { margin:8px 0;font-size:.88rem;line-height:1.6; }
        .ok { color:#4ade80; }
        .warn { color:#fbbf24; }
        .btn { display:inline-block;margin-top:1.5rem;background:linear-gradient(135deg,#6c63ff,#3b82f6);color:#fff;padding:10px 22px;border-radius:8px;text-decoration:none;font-weight:600;font-size:.88rem; }
        hr  { border:none;border-top:1px solid rgba(255,255,255,.07);margin:1.2rem 0; }
    </style>
</head>
<body>
<div class="box">
    <h2>🛠️ WAF Monitor — Database Setup</h2>
    <?php foreach ($msgs as [$type, $msg]): ?>
    <p class="<?= $type ?>"><?= $msg ?></p>
    <?php endforeach; ?>
    <hr>
    <p style="color:#475569;font-size:.78rem;">Setup complete. <strong>Delete setup.php</strong> immediately on production.</p>
    <a href="login.php" class="btn">→ Go to Login</a>
</div>
</body>
</html>
