<?php
// ============================================================
// setup.php — One-time database and table creation
// ============================================================
require_once __DIR__ . '/config.php';

// Only allow running from CLI or with secret token
$token = $_GET['token'] ?? '';
if (php_sapi_name() !== 'cli' && $token !== 'setup_waf_2026') {
    http_response_code(403);
    die('<h2 style="font-family:monospace;padding:2rem;color:#ef4444;">403 - Forbidden. Add ?token=setup_waf_2026 to run setup.</h2>');
}

$db = getDB();
$messages = [];

// Create database
$db->query("CREATE DATABASE IF NOT EXISTS `waf_monitor` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
$db->query("USE `waf_monitor`");
$messages[] = "✅ Database `waf_monitor` ready";

// Create access_logs table
$db->query("
    CREATE TABLE IF NOT EXISTS `access_logs` (
        `id`          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        `ip_address`  VARCHAR(45)  NOT NULL,
        `username`    VARCHAR(100) DEFAULT NULL,
        `action`      VARCHAR(50)  NOT NULL COMMENT 'login_attempt | login_failed | login_success | page_visit | manual_block',
        `status`      VARCHAR(20)  NOT NULL COMMENT 'success | failed | blocked',
        `user_agent`  TEXT         DEFAULT NULL,
        `request_uri` VARCHAR(500) DEFAULT NULL,
        `created_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
        INDEX `idx_ip`      (`ip_address`),
        INDEX `idx_status`  (`status`),
        INDEX `idx_created` (`created_at`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
");
$messages[] = "✅ Table `access_logs` ready";

// Create ip_blacklist table
$db->query("
    CREATE TABLE IF NOT EXISTS `ip_blacklist` (
        `id`          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        `ip_address`  VARCHAR(45)  NOT NULL UNIQUE,
        `reason`      VARCHAR(500) NOT NULL DEFAULT 'Manually blocked by administrator',
        `blocked_by`  VARCHAR(50)  NOT NULL DEFAULT 'system',
        `blocked_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updated_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX `idx_ip` (`ip_address`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
");
$messages[] = "✅ Table `ip_blacklist` ready (One-to-Many linked via ip_address → access_logs.ip_address)";

// Insert sample data for demonstration
$sampleIPs = ['192.168.1.100', '10.0.0.55', '45.33.32.156', '172.16.0.1'];
$actions = ['login_attempt', 'login_failed', 'login_failed', 'login_failed', 'login_failed', 'login_failed', 'login_failed'];
$agents = [
    'Mozilla/5.0 (compatible; Googlebot/2.1)',
    'sqlmap/1.7.2#stable (https://sqlmap.org)',
    'curl/7.88.1',
    'python-requests/2.31.0',
    'Nikto/2.1.6',
];

$stmt = $db->prepare("INSERT IGNORE INTO access_logs (ip_address, username, action, status, user_agent, request_uri) VALUES (?,?,?,?,?,?)");
foreach ($sampleIPs as $ip) {
    foreach ($actions as $i => $action) {
        $status = ($action === 'login_attempt') ? 'failed' : 'failed';
        $ua = $agents[array_rand($agents)];
        $user = 'admin' . rand(1,5);
        $uri = '/login.php';
        $stmt->bind_param('ssssss', $ip, $user, $action, $status, $ua, $uri);
        $stmt->execute();
    }
}
$stmt->close();
$messages[] = "✅ Sample access_logs data inserted";

// Auto-blacklist one IP as sample
$sampleBlackIP = '45.33.32.156';
$reason = 'Auto-blocked: >5 failed login attempts within 1 hour';
$by = 'system';
$bl = $db->prepare("INSERT IGNORE INTO ip_blacklist (ip_address, reason, blocked_by) VALUES (?,?,?)");
$bl->bind_param('sss', $sampleBlackIP, $reason, $by);
$bl->execute();
$bl->close();
$messages[] = "✅ Sample blacklisted IP inserted ($sampleBlackIP)";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Setup — WAF Monitor</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family:'Inter',sans-serif; background:#030712; color:#f9fafb; display:flex; align-items:center; justify-content:center; min-height:100vh; }
        .box { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:2.5rem; max-width:520px; width:90%; }
        h2 { color:#6c63ff; margin-bottom:1.5rem; }
        p { margin:8px 0; font-size:0.9rem; line-height:1.6; }
        .success { color:#4ade80; }
        .btn { display:inline-block; margin-top:1.5rem; background:linear-gradient(135deg,#6c63ff,#3b82f6); color:#fff; padding:10px 24px; border-radius:8px; text-decoration:none; font-weight:600; font-size:0.9rem; }
    </style>
</head>
<body>
<div class="box">
    <h2>🛠️ WAF Monitor — Database Setup</h2>
    <?php foreach($messages as $msg): ?>
        <p class="success"><?= $msg ?></p>
    <?php endforeach; ?>
    <br>
    <p style="color:#9ca3af;font-size:0.8rem;">Setup complete! Delete this file from production server for security.</p>
    <a href="login.php" class="btn">→ Go to Login</a>
</div>
</body>
</html>
