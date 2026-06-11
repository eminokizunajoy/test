<?php
// ============================================================
// functions.php — All reusable helper functions
// ============================================================

// ── Database connection (singleton) ──────────────────────────
function getDB(): mysqli {
    static $conn = null;
    if ($conn === null) {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        if ($conn->connect_error) {
            http_response_code(500);
            die('<div style="font:16px monospace;padding:40px;background:#0f172a;color:#f87171;min-height:100vh;">
                <h2>⛔ Database Error</h2><pre>' . htmlspecialchars($conn->connect_error) . '</pre>
                <p>Edit <strong>config.php</strong> and make sure MySQL is running.</p>
            </div>');
        }
        $conn->set_charset('utf8mb4');
    }
    return $conn;
}

// ── Get real client IP address ────────────────────────────────
function getClientIP(): string {
    $keys = ['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'REMOTE_ADDR'];
    foreach ($keys as $key) {
        if (!empty($_SERVER[$key])) {
            $ip = trim(explode(',', $_SERVER[$key])[0]);
            if (filter_var($ip, FILTER_VALIDATE_IP)) return $ip;
        }
    }
    return '127.0.0.1';
}

// ── INSERT: Log an access event ───────────────────────────────
function logAccess(string $ip, string $action, string $status, ?string $username = null): void {
    $db  = getDB();
    $ua  = substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 500);
    $uri = substr($_SERVER['REQUEST_URI']     ?? '', 0, 500);
    $stmt = $db->prepare(
        "INSERT INTO access_logs (ip_address, username, action, status, user_agent, request_uri)
         VALUES (?, ?, ?, ?, ?, ?)"
    );
    $stmt->bind_param('ssssss', $ip, $username, $action, $status, $ua, $uri);
    $stmt->execute();
    $stmt->close();
}

// ── Auto-blacklist if IP has >5 failed attempts (last 1h) ────
function autoBlacklistCheck(string $ip): bool {
    $db = getDB();
    $stmt = $db->prepare(
        "SELECT COUNT(*) AS cnt FROM access_logs
         WHERE ip_address = ? AND status = 'failed' AND created_at > NOW() - INTERVAL 1 HOUR"
    );
    $stmt->bind_param('s', $ip);
    $stmt->execute();
    $cnt = $stmt->get_result()->fetch_assoc()['cnt'] ?? 0;
    $stmt->close();

    if ($cnt > 5) {
        $chk = $db->prepare("SELECT id FROM ip_blacklist WHERE ip_address = ?");
        $chk->bind_param('s', $ip);
        $chk->execute();
        $exists = $chk->get_result()->num_rows > 0;
        $chk->close();

        if (!$exists) {
            $reason = 'Auto-blocked: exceeded 5 failed login attempts in 1 hour';
            $by     = 'system';
            $ins = $db->prepare(
                "INSERT INTO ip_blacklist (ip_address, reason, blocked_by) VALUES (?, ?, ?)"
            );
            $ins->bind_param('sss', $ip, $reason, $by);
            $ins->execute();
            $ins->close();
            return true; // newly blacklisted
        }
    }
    return false;
}

// ── Check if IP is blacklisted (returns row or null) ─────────
function getBlacklistEntry(string $ip): ?array {
    $db   = getDB();
    $stmt = $db->prepare("SELECT reason, blocked_at FROM ip_blacklist WHERE ip_address = ? LIMIT 1");
    $stmt->bind_param('s', $ip);
    $stmt->execute();
    $row = $stmt->get_result()->fetch_assoc();
    $stmt->close();
    return $row ?: null;
}

// ── Auth guard — redirect if not logged in ────────────────────
function requireAdmin(): void {
    if (empty($_SESSION['admin_logged_in'])) {
        header('Location: ' . BASE_URL . '/login.php');
        exit;
    }
}

// ── Redirect back with flash message ─────────────────────────
function redirectBack(string $url, string $msg, string $type = 'success'): void {
    $_SESSION['flash'] = ['msg' => $msg, 'type' => $type];
    header("Location: $url");
    exit;
}

// ── Render and clear flash message ───────────────────────────
function renderFlash(): string {
    if (empty($_SESSION['flash'])) return '';
    $flash = $_SESSION['flash'];
    unset($_SESSION['flash']);
    $cls = $flash['type'] === 'danger' ? 'alert-danger' : 'alert-success';
    return '<div class="alert ' . $cls . '">' . $flash['msg'] . '</div>';
}

// ── Fetch dashboard stats ─────────────────────────────────────
function getDashboardStats(): array {
    $db   = getDB();
    $logs = $db->query("SELECT
        COUNT(*)                 AS total_logs,
        SUM(status='failed')     AS failed_count,
        SUM(status='blocked')    AS blocked_count,
        SUM(status='success')    AS success_count,
        COUNT(DISTINCT ip_address) AS unique_ips
      FROM access_logs")->fetch_assoc();

    $blCount = $db->query("SELECT COUNT(*) AS cnt FROM ip_blacklist")->fetch_assoc()['cnt'];

    return [
        'total_logs'     => (int)($logs['total_logs']   ?? 0),
        'failed_count'   => (int)($logs['failed_count'] ?? 0),
        'blocked_count'  => (int)($logs['blocked_count']?? 0),
        'success_count'  => (int)($logs['success_count']?? 0),
        'unique_ips'     => (int)($logs['unique_ips']   ?? 0),
        'blacklist_count'=> (int)$blCount,
    ];
}

// ── Format: relative time ago ─────────────────────────────────
function timeAgo(string $datetime): string {
    $diff = time() - strtotime($datetime);
    if ($diff <    60) return $diff . 's ago';
    if ($diff <  3600) return floor($diff / 60) . 'm ago';
    if ($diff < 86400) return floor($diff / 3600) . 'h ago';
    return floor($diff / 86400) . 'd ago';
}

// ── HTML: status badge ────────────────────────────────────────
function statusBadge(string $status): string {
    $map = [
        'success' => ['#4ade80', '#052e16', '✅'],
        'failed'  => ['#f87171', '#450a0a', '❌'],
        'blocked' => ['#fb923c', '#431407', '🚫'],
        'visit'   => ['#60a5fa', '#0c1a2e', '👁'],
    ];
    [$color, $bg, $icon] = $map[$status] ?? ['#9ca3af', '#1f2937', '•'];
    return "<span style='background:{$bg};color:{$color};border:1px solid {$color}33;
            padding:2px 9px;border-radius:20px;font-size:0.7rem;font-weight:600;white-space:nowrap;'>
            {$icon} {$status}</span>";
}

// ── HTML: action badge ────────────────────────────────────────
function actionBadge(string $action): string {
    $map = [
        'login_attempt' => ['#a78bfa', '🔒'],
        'login_failed'  => ['#f87171', '⚠️'],
        'login_success' => ['#4ade80', '✅'],
        'page_visit'    => ['#60a5fa', '🌐'],
        'manual_block'  => ['#fb923c', '🔨'],
    ];
    [$color, $icon] = $map[$action] ?? ['#9ca3af', '•'];
    return "<span style='color:{$color};font-size:0.8rem;white-space:nowrap;'>{$icon} {$action}</span>";
}

// ── Sanitize output ───────────────────────────────────────────
function e(string $str): string {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
