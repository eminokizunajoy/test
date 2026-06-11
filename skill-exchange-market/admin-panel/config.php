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

// Dynamic BASE_URL detection
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://";
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$requestUri = $_SERVER['REQUEST_URI'] ?? '';
if (strpos($requestUri, '/skill-exchange-market/admin-panel') !== false) {
    define('BASE_URL', $protocol . $host . '/skill-exchange-market/admin-panel');
} elseif (strpos($requestUri, '/admin-panel') !== false) {
    define('BASE_URL', $protocol . $host . '/admin-panel');
} else {
    define('BASE_URL', $protocol . $host);
}

// Secure Session Configuration
ini_set('session.cookie_httponly', 1);
ini_set('session.use_only_cookies', 1);
if (session_status() === PHP_SESSION_NONE) {
    session_name('waf_admin_sess');
    session_start();
}

// Generate CSRF Token if not present
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

require_once __DIR__ . '/functions.php';
