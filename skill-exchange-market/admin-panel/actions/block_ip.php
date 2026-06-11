<?php
// ============================================================
// actions/block_ip.php — INSERT: Block an IP address
// ============================================================
require_once __DIR__ . '/../config.php';
requireAdmin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !verifyCSRFToken($_POST['csrf_token'] ?? '')) {
    http_response_code(403);
    die('Error: Invalid or missing CSRF token.');
}

$ip       = trim($_POST['ip_address'] ?? '');
$reason   = trim($_POST['reason']     ?? 'Manually blocked by administrator');
$redirect = $_POST['redirect']        ?? BASE_URL . '/blacklist.php';

if (!filter_var($ip, FILTER_VALIDATE_IP)) {
    redirectBack($redirect, '❌ Invalid IP address format.', 'danger');
}

$admin = $_SESSION['admin_user'] ?? 'admin';
$db    = getDB();

// INSERT or UPDATE if already exists (CRUD: Update if re-blocking same IP)
$stmt = $db->prepare(
    "INSERT INTO ip_blacklist (ip_address, reason, blocked_by)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE reason=VALUES(reason), blocked_by=VALUES(blocked_by), updated_at=NOW()"
);
$stmt->bind_param('sss', $ip, $reason, $admin);
$stmt->execute();
$affected = $stmt->affected_rows;
$stmt->close();

logAccess(getClientIP(), 'manual_block', 'success', $admin);

$msg = $affected === 1
    ? "✅ IP <strong>$ip</strong> has been blocked."
    : "⚠️ IP <strong>$ip</strong> was already blacklisted — reason updated.";

redirectBack($redirect, $msg, 'success');
