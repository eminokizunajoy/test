<?php
// ============================================================
// config.php — Database connection + session config
// ============================================================

define('DB_HOST', 'localhost');
define('DB_USER', 'root');          // ganti sesuai MySQL user kamu
define('DB_PASS', '');              // ganti sesuai MySQL password kamu
define('DB_NAME', 'waf_monitor');   // nama database

define('ADMIN_USERNAME', 'sabda26');
define('ADMIN_PASSWORD', '123456');  // plain text (dalam produksi gunakan password_hash)

// Session start (hanya jika belum ada)
if (session_status() === PHP_SESSION_NONE) {
    session_name('waf_admin_sess');
    session_start();
}

// ── Database connection (singleton) ──
function getDB(): mysqli {
    static $conn = null;
    if ($conn === null) {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        if ($conn->connect_error) {
            http_response_code(500);
            die('<div style="font-family:monospace;padding:40px;background:#0f172a;color:#f87171;min-height:100vh;">
                <h2>⛔ Database Connection Failed</h2>
                <pre>' . htmlspecialchars($conn->connect_error) . '</pre>
                <p>Check config.php and make sure MySQL is running.</p>
            </div>');
        }
        $conn->set_charset('utf8mb4');
    }
    return $conn;
}

// ── Get real client IP ──
function getClientIP(): string {
    foreach (['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'REMOTE_ADDR'] as $key) {
        if (!empty($_SERVER[$key])) {
            $ip = trim(explode(',', $_SERVER[$key])[0]);
            if (filter_var($ip, FILTER_VALIDATE_IP)) return $ip;
        }
    }
    return '0.0.0.0';
}

// ── Insert into access_logs ──
function logAccess(string $ip, string $action, string $status, ?string $username = null): void {
    $db = getDB();
    $ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
    $uri = $_SERVER['REQUEST_URI'] ?? '';
    $stmt = $db->prepare(
        "INSERT INTO access_logs (ip_address, username, action, status, user_agent, request_uri)
         VALUES (?, ?, ?, ?, ?, ?)"
    );
    $stmt->bind_param('ssssss', $ip, $username, $action, $status, $ua, $uri);
    $stmt->execute();
    $stmt->close();
}

// ── Auto-blacklist if > 5 failed attempts ──
function autoBlacklistCheck(string $ip): void {
    $db = getDB();
    $stmt = $db->prepare(
        "SELECT COUNT(*) as cnt FROM access_logs
         WHERE ip_address = ? AND status = 'failed' AND created_at > NOW() - INTERVAL 1 HOUR"
    );
    $stmt->bind_param('s', $ip);
    $stmt->execute();
    $row = $stmt->get_result()->fetch_assoc();
    $stmt->close();

    if (($row['cnt'] ?? 0) > 5) {
        // Check not already blacklisted
        $chk = $db->prepare("SELECT id FROM ip_blacklist WHERE ip_address = ?");
        $chk->bind_param('s', $ip);
        $chk->execute();
        $exists = $chk->get_result()->num_rows > 0;
        $chk->close();
        if (!$exists) {
            $ins = $db->prepare(
                "INSERT INTO ip_blacklist (ip_address, reason, blocked_by) VALUES (?, 'Auto-blocked: >5 failed login attempts within 1 hour', 'system')"
            );
            $ins->bind_param('s', $ip);
            $ins->execute();
            $ins->close();
        }
    }
}

// ── Auth check (for admin pages) ──
function requireAdmin(): void {
    if (empty($_SESSION['admin_logged_in'])) {
        header('Location: login.php?ref=auth');
        exit;
    }
}

// ── Time formatter ──
function timeAgo(string $datetime): string {
    $diff = time() - strtotime($datetime);
    if ($diff < 60) return $diff . 's ago';
    if ($diff < 3600) return floor($diff/60) . 'm ago';
    if ($diff < 86400) return floor($diff/3600) . 'h ago';
    return floor($diff/86400) . 'd ago';
}
?>
