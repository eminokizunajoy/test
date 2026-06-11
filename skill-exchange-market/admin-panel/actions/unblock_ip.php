<?php
// ============================================================
// actions/unblock_ip.php — DELETE: Remove IP from blacklist
// ============================================================
require_once __DIR__ . '/../config.php';
requireAdmin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !verifyCSRFToken($_POST['csrf_token'] ?? '')) {
    http_response_code(403);
    die('Error: Invalid or missing CSRF token.');
}

$id       = (int)($_POST['bl_id']   ?? 0);
$redirect = $_POST['redirect']      ?? BASE_URL . '/blacklist.php';

if ($id <= 0) {
    redirectBack($redirect, '❌ Invalid ID.', 'danger');
}

$db   = getDB();

// Get IP for the message
$row  = $db->query("SELECT ip_address FROM ip_blacklist WHERE id=$id")->fetch_assoc();
$ip   = $row['ip_address'] ?? 'Unknown';

$stmt = $db->prepare("DELETE FROM ip_blacklist WHERE id=?");
$stmt->bind_param('i', $id);
$stmt->execute();
$stmt->close();

redirectBack($redirect, "✅ IP <strong>$ip</strong> has been unblocked.", 'success');
