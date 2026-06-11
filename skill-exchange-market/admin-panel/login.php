<?php
// ============================================================
// login.php — Admin Login Portal
// Logs EVERY visit and EVERY failed attempt into access_logs.
// Auto-blacklists IP after >5 failures within 1 hour.
// ============================================================
require_once __DIR__ . '/gatekeeper.php';

$clientIP = getClientIP();
$error    = '';

// Redirect if already logged in
if (!empty($_SESSION['admin_logged_in'])) {
    header('Location: ' . BASE_URL . '/dashboard.php');
    exit;
}

// ── Log every page load ──
logAccess($clientIP, 'login_attempt', 'visit');

// ── Handle form submission ──
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($username === ADMIN_USERNAME && $password === ADMIN_PASSWORD) {
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_user']      = $username;
        $_SESSION['admin_ip']        = $clientIP;
        logAccess($clientIP, 'login_success', 'success', $username);
        header('Location: ' . BASE_URL . '/dashboard.php');
        exit;
    }

    // Failed
    logAccess($clientIP, 'login_failed', 'failed', $username ?: null);
    $wasBlocked = autoBlacklistCheck($clientIP);
    if ($wasBlocked) {
        // Gatekeeper will catch this on next request, but show message now
        $error = 'Too many failed attempts. Your IP has been automatically blocked.';
    } else {
        $error = 'Invalid credentials. This attempt has been logged.';
    }
}

// Count remaining attempts before block
$db       = getDB();
$failStmt = $db->prepare("SELECT COUNT(*) AS cnt FROM access_logs WHERE ip_address=? AND status='failed' AND created_at > NOW() - INTERVAL 1 HOUR");
$failStmt->bind_param('s', $clientIP);
$failStmt->execute();
$failCount = (int)($failStmt->get_result()->fetch_assoc()['cnt'] ?? 0);
$failStmt->close();
$remaining = max(0, 5 - $failCount);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login · WAF Monitor</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
    <style>
    *, *::before, *::after { box-sizing:border-box;margin:0;padding:0; }
    body {
        font-family:'Inter',sans-serif;min-height:100vh;background:#030712;
        display:grid;place-items:center;overflow:hidden;
    }
    .bg {
        position:fixed;inset:0;
        background:radial-gradient(ellipse 55% 45% at 20% 40%,rgba(108,99,255,.08),transparent 65%),
                   radial-gradient(ellipse 50% 55% at 80% 60%,rgba(59,130,246,.06),transparent 65%);
    }
    .grid { position:fixed;inset:0;background-image:linear-gradient(rgba(255,255,255,.018)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018)1px,transparent 1px);background-size:50px 50px; }

    .card {
        position:relative;z-index:10;width:400px;max-width:92vw;
        background:rgba(15,23,42,.85);border:1px solid rgba(255,255,255,.08);
        border-radius:20px;padding:2.5rem 2rem;
        box-shadow:0 25px 60px rgba(0,0,0,.5),0 0 0 1px rgba(108,99,255,.1);
        backdrop-filter:blur(18px);
        animation:appear .45s cubic-bezier(.34,1.56,.64,1) both;
    }
    @keyframes appear { from{opacity:0;transform:translateY(24px)scale(.97);} to{opacity:1;transform:none;} }

    .logo-area { text-align:center;margin-bottom:2rem; }
    .logo-box {
        width:60px;height:60px;
        background:linear-gradient(135deg,rgba(108,99,255,.15),rgba(59,130,246,.15));
        border:1px solid rgba(108,99,255,.3);border-radius:14px;
        display:inline-flex;align-items:center;justify-content:center;
        font-size:1.7rem;margin-bottom:.9rem;
        box-shadow:0 0 28px rgba(108,99,255,.12);
    }
    .logo-title { font-size:1.2rem;font-weight:700;background:linear-gradient(135deg,#a78bfa,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:3px; }
    .logo-sub   { font-size:.72rem;color:#475569;letter-spacing:.15em;text-transform:uppercase; }

    .secure-badge {
        display:flex;align-items:center;gap:8px;
        background:rgba(108,99,255,.07);border:1px solid rgba(108,99,255,.18);
        border-radius:8px;padding:8px 12px;margin-bottom:1.4rem;
        font-size:.74rem;color:#6b7280;
    }
    .dot { width:6px;height:6px;border-radius:50%;background:#4ade80;box-shadow:0 0 7px #4ade80;flex-shrink:0;animation:blink 2s infinite; }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }

    .alert-box {
        background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);
        border-radius:8px;padding:10px 13px;color:#fca5a5;
        font-size:.82rem;margin-bottom:1.2rem;display:flex;gap:9px;align-items:flex-start;
    }

    .form-group { margin-bottom:1.1rem; }
    .form-group label { display:block;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#475569;margin-bottom:7px; }
    .input-row { position:relative; }
    .input-icon { position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:.95rem;color:#374151; }
    .form-group input {
        width:100%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
        border-radius:9px;padding:11px 12px 11px 38px;color:#f9fafb;
        font-size:.88rem;font-family:inherit;outline:none;transition:border-color .2s,box-shadow .2s;
    }
    .form-group input:focus { border-color:rgba(108,99,255,.5);box-shadow:0 0 0 3px rgba(108,99,255,.09); }
    .form-group input::placeholder { color:#374151; }

    .btn-submit {
        width:100%;background:linear-gradient(135deg,#6c63ff,#3b82f6);color:#fff;
        border:none;border-radius:9px;padding:12px;font-size:.92rem;font-weight:600;
        font-family:inherit;cursor:pointer;transition:opacity .2s,transform .1s;
        box-shadow:0 4px 18px rgba(108,99,255,.28);margin-top:.3rem;
    }
    .btn-submit:hover  { opacity:.9;transform:translateY(-1px); }
    .btn-submit:active { transform:none; }

    .attempts-bar { margin-bottom:1.1rem; }
    .attempts-track { height:3px;background:rgba(255,255,255,.06);border-radius:2px;margin-top:5px;overflow:hidden; }
    .attempts-fill  { height:100%;background:<?= $remaining <= 1 ? '#ef4444' : ($remaining <= 3 ? '#f59e0b' : '#4ade80') ?>;transition:width .4s;width:<?= ($remaining/5)*100 ?>%; }

    .footer-note { margin-top:1.4rem;padding-top:1.2rem;border-top:1px solid rgba(255,255,255,.05);font-size:.7rem;color:#374151;text-align:center;line-height:1.7; }
    .ip-mono { font-family:monospace;color:#4b5563; }
    </style>
</head>
<body>
<div class="bg"></div><div class="grid"></div>

<div class="card">
    <div class="logo-area">
        <div class="logo-box">🛡️</div>
        <div class="logo-title">WAF Monitor</div>
        <div class="logo-sub">Web Access Log Analyzer</div>
    </div>

    <div class="secure-badge">
        <span class="dot"></span>
        Secured Portal — All attempts logged · <span class="ip-mono"><?= e($clientIP) ?></span>
    </div>

    <?php if ($error): ?>
    <div class="alert-box"><span>⚠️</span><span><?= e($error) ?></span></div>
    <?php endif; ?>

    <form method="POST" autocomplete="off">
        <div class="form-group">
            <label>Administrator ID</label>
            <div class="input-row">
                <span class="input-icon">👤</span>
                <input type="text" name="username" required placeholder="Enter username"
                       value="<?= e($_POST['username'] ?? '') ?>">
            </div>
        </div>
        <div class="form-group">
            <label>Password</label>
            <div class="input-row">
                <span class="input-icon">🔑</span>
                <input type="password" name="password" required placeholder="••••••••">
            </div>
        </div>

        <?php if ($failCount > 0): ?>
        <div class="attempts-bar">
            <div style="display:flex;justify-content:space-between;font-size:.7rem;color:#6b7280;">
                <span>Failed attempts this hour: <?= $failCount ?>/5</span>
                <span><?= $remaining ?> remaining before auto-block</span>
            </div>
            <div class="attempts-track"><div class="attempts-fill"></div></div>
        </div>
        <?php endif; ?>

        <button type="submit" class="btn-submit">🔐 Authenticate</button>
    </form>

    <div class="footer-note">
        Restricted Access — Admin Only<br>
        After 5 failed attempts, your IP is automatically blocked.
    </div>
</div>
</body>
</html>
