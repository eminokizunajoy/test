<?php
// ============================================================
// actions/delete_log.php — DELETE: Remove a single log entry
// ============================================================
require_once __DIR__ . '/../config.php';
requireAdmin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !verifyCSRFToken($_POST['csrf_token'] ?? '')) {
    http_response_code(403);
    die('Error: Invalid or missing CSRF token.');
}

$id       = (int)($_POST['log_id'] ?? 0);
$redirect = $_POST['redirect']     ?? BASE_URL . '/logs.php';

if ($id <= 0) {
    redirectBack($redirect, '❌ Invalid log ID.', 'danger');
}

$db   = getDB();
$stmt = $db->prepare("DELETE FROM access_logs WHERE id=?");
$stmt->bind_param('i', $id);
$stmt->execute();
$stmt->close();

redirectBack($redirect, "✅ Log entry #$id has been deleted.", 'success');
