<?php
// ============================================================
// actions/update_reason.php — UPDATE: Edit block reason
// ============================================================
require_once __DIR__ . '/../config.php';
requireAdmin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . BASE_URL . '/blacklist.php');
    exit;
}

$id       = (int)($_POST['bl_id']      ?? 0);
$reason   = trim($_POST['new_reason']  ?? '');
$redirect = $_POST['redirect']         ?? BASE_URL . '/blacklist.php';

if ($id <= 0 || $reason === '') {
    redirectBack($redirect, '❌ ID and reason are required.', 'danger');
}

$db   = getDB();
$stmt = $db->prepare("UPDATE ip_blacklist SET reason=?, updated_at=NOW() WHERE id=?");
$stmt->bind_param('si', $reason, $id);
$stmt->execute();
$stmt->close();

redirectBack($redirect, '✅ Block reason updated.', 'success');
