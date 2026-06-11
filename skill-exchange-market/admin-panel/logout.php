<?php
// ============================================================
// logout.php
// ============================================================
require_once __DIR__ . '/config.php';
session_destroy();
header('Location: login.php?out=1');
exit;
?>
