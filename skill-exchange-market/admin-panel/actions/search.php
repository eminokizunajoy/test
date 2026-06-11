<?php
// ============================================================
// actions/search.php — AJAX: Live search access logs (JSON)
// Returns JSON array of matching rows for JS live search
// ============================================================
require_once __DIR__ . '/../config.php';
requireAdmin();

header('Content-Type: application/json');

$q = trim($_GET['q'] ?? '');
if (strlen($q) < 2) {
    echo json_encode(['results' => [], 'total' => 0]);
    exit;
}

$db   = getDB();
$safe = $db->real_escape_string($q);
$rows = $db->query("
    SELECT id, ip_address, username, action, status, created_at
    FROM access_logs
    WHERE ip_address LIKE '%$safe%'
       OR username   LIKE '%$safe%'
       OR action     LIKE '%$safe%'
       OR status     LIKE '%$safe%'
    ORDER BY created_at DESC
    LIMIT 20
");

$results = [];
while ($r = $rows->fetch_assoc()) {
    $results[] = [
        'id'         => $r['id'],
        'ip'         => $r['ip_address'],
        'username'   => $r['username']   ?? '',
        'action'     => $r['action'],
        'status'     => $r['status'],
        'created_at' => $r['created_at'],
    ];
}

echo json_encode(['results' => $results, 'total' => count($results)]);
