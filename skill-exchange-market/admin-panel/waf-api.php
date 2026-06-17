<?php
// ============================================================
// waf-api.php — JSON API for WAF Monitor SPA Integration
// Called by app.js on the client side (admin only via token)
// ============================================================
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Simple token auth (shared secret)
define('WAF_API_TOKEN', 'waf_spa_2026_secure');

$token = $_GET['token'] ?? '';
if ($token !== WAF_API_TOKEN) {
    http_response_code(403);
    echo json_encode(['error' => 'Forbidden']);
    exit;
}

require_once __DIR__ . '/config.php';

$action = $_GET['action'] ?? 'stats';

try {
    $db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($db->connect_error) throw new Exception('DB Error');

    if ($action === 'stats') {
        $stats = [];

        $r = $db->query("SELECT COUNT(*) AS c FROM access_logs"); 
        $stats['total_logs'] = (int)$r->fetch_assoc()['c'];

        $r = $db->query("SELECT COUNT(*) AS c FROM access_logs WHERE status='failed'");
        $stats['failed_count'] = (int)$r->fetch_assoc()['c'];

        $r = $db->query("SELECT COUNT(*) AS c FROM ip_blacklist");
        $stats['blacklist_count'] = (int)$r->fetch_assoc()['c'];

        $r = $db->query("SELECT COUNT(DISTINCT ip_address) AS c FROM access_logs");
        $stats['unique_ips'] = (int)$r->fetch_assoc()['c'];

        $r = $db->query("SELECT COUNT(*) AS c FROM access_logs WHERE status='blocked'");
        $stats['blocked_count'] = (int)$r->fetch_assoc()['c'];

        // Hourly chart (last 24h)
        $hourly = $db->query("
            SELECT DATE_FORMAT(created_at,'%H:00') AS hour,
                   COUNT(*) AS total,
                   SUM(status='failed') AS fails
            FROM access_logs
            WHERE created_at > NOW() - INTERVAL 24 HOUR
            GROUP BY DATE_FORMAT(created_at,'%Y-%m-%d %H')
            ORDER BY created_at ASC LIMIT 24
        ");
        $chart = ['labels'=>[], 'total'=>[], 'fails'=>[]];
        while ($row = $hourly->fetch_assoc()) {
            $chart['labels'][] = $row['hour'];
            $chart['total'][]  = (int)$row['total'];
            $chart['fails'][]  = (int)$row['fails'];
        }
        $stats['chart'] = $chart;

        echo json_encode(['ok' => true, 'stats' => $stats]);

    } elseif ($action === 'logs') {
        $limit = min((int)($_GET['limit'] ?? 50), 200);
        $offset = (int)($_GET['offset'] ?? 0);
        $filter = $_GET['filter'] ?? 'all'; // all|failed|blocked|success

        $where = '';
        if ($filter === 'failed')  $where = "WHERE status='failed'";
        if ($filter === 'blocked') $where = "WHERE status='blocked'";
        if ($filter === 'success') $where = "WHERE status='success'";

        $result = $db->query("SELECT * FROM access_logs $where ORDER BY created_at DESC LIMIT $limit OFFSET $offset");
        $logs = [];
        while ($row = $result->fetch_assoc()) $logs[] = $row;

        $total = $db->query("SELECT COUNT(*) AS c FROM access_logs $where")->fetch_assoc()['c'];

        echo json_encode(['ok' => true, 'logs' => $logs, 'total' => (int)$total]);

    } elseif ($action === 'blacklist') {
        $result = $db->query("SELECT * FROM ip_blacklist ORDER BY blocked_at DESC");
        $list = [];
        while ($row = $result->fetch_assoc()) $list[] = $row;

        echo json_encode(['ok' => true, 'blacklist' => $list]);

    } elseif ($action === 'unblock' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $ip = $_POST['ip'] ?? '';
        if (!$ip) { echo json_encode(['error' => 'Missing IP']); exit; }
        $ip_safe = $db->real_escape_string($ip);
        $db->query("DELETE FROM ip_blacklist WHERE ip_address='$ip_safe'");
        echo json_encode(['ok' => true]);

    } elseif ($action === 'block' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $ip = $_POST['ip'] ?? '';
        $reason = $_POST['reason'] ?? 'Manually blocked by admin';
        if (!$ip) { echo json_encode(['error' => 'Missing IP']); exit; }
        $ip_safe = $db->real_escape_string($ip);
        $reason_safe = $db->real_escape_string($reason);
        $db->query("INSERT IGNORE INTO ip_blacklist (ip_address, reason, blocked_at) VALUES ('$ip_safe','$reason_safe',NOW())");
        echo json_encode(['ok' => true]);

    } else {
        echo json_encode(['error' => 'Unknown action']);
    }

    $db->close();
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
