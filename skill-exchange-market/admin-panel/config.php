<?php
// ============================================================
// config.php — Database credentials + session init ONLY
// ============================================================

define('DB_HOST',         'localhost');
define('DB_USER',         'root');       // ← ganti MySQL user kamu
define('DB_PASS',         '');           // ← ganti MySQL password kamu
define('DB_NAME',         'waf_monitor');
define('ADMIN_USERNAME',  'sabda26');
define('ADMIN_PASSWORD',  '123456');

// Sesuaikan dengan URL server kamu (tanpa trailing slash)
define('BASE_URL', 'http://localhost/skill-exchange-market/admin-panel');

if (session_status() === PHP_SESSION_NONE) {
    session_name('waf_admin_sess');
    session_start();
}

require_once __DIR__ . '/functions.php';
