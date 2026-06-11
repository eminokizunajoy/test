<?php
// ============================================================
// admin.php — Entry point redirect to dashboard
// Kept so old bookmarks/links still work.
// ============================================================
require_once __DIR__ . '/config.php';
requireAdmin();
header('Location: ' . BASE_URL . '/dashboard.php');
exit;
