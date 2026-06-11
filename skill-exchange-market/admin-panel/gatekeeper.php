<?php
// ============================================================
// gatekeeper.php — IP Blacklist Middleware
// Include at the TOP of every protected page.
// ============================================================
require_once __DIR__ . '/config.php';

$_clientIP = getClientIP();
$_blocked  = getBlacklistEntry($_clientIP);

if ($_blocked) {
    logAccess($_clientIP, 'page_visit', 'blocked');
    http_response_code(403);
    $incidentId = strtoupper(substr(md5($_clientIP . date('Y-m-d')), 0, 12));
    $blockedSince = date('Y-m-d H:i', strtotime($_blocked['blocked_at']));
    $reason = e($_blocked['reason']);
    $ip     = e($_clientIP);
    include __DIR__ . '/views/403.php';
    exit;
}
