<?php
// ============================================================
// login.php — Admin Login Portal (logs EVERY visit + attempt)
// ============================================================
require_once __DIR__ . '/gatekeeper.php'; // IP blacklist check first

$clientIP = getClientIP();
$error    = '';
$success  = false;

// ── Log every page load ──
logAccess($clientIP, 'login_attempt', 'visit');

// ── Handle form submission ──
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($username === ADMIN_USERNAME && $password === ADMIN_PASSWORD) {
        // ✅ Success
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_user']      = $username;
        $_SESSION['admin_ip']        = $clientIP;
        logAccess($clientIP, 'login_success', 'success', $username);
        header('Location: admin.php');
        exit;
    } else {
        // ❌ Failed attempt
        logAccess($clientIP, 'login_failed', 'failed', $username);
        autoBlacklistCheck($clientIP); // auto-blacklist after >5 failures
        $error = 'Invalid credentials. This attempt has been logged.';
    }
}

// Redirect if already logged in
if (!empty($_SESSION['admin_logged_in'])) {
    header('Location: admin.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WAF Monitor — Secure Login</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
            background: #030712;
            display: grid;
            place-items: center;
            overflow: hidden;
        }

        /* Animated background */
        .bg-canvas {
            position: fixed; inset: 0; z-index: 0;
            background:
                radial-gradient(ellipse 60% 50% at 20% 40%, rgba(108,99,255,0.08) 0%, transparent 60%),
                radial-gradient(ellipse 50% 60% at 80% 60%, rgba(59,130,246,0.06) 0%, transparent 60%);
        }
        .grid-lines {
            position: fixed; inset: 0; z-index: 0;
            background-image:
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
            background-size: 50px 50px;
        }
        /* Floating particles */
        .particle {
            position: fixed; border-radius: 50%;
            background: rgba(108,99,255,0.4);
            animation: float-p 8s ease-in-out infinite;
        }
        .p1 { width:6px;height:6px; top:20%; left:15%; animation-delay:0s; }
        .p2 { width:4px;height:4px; top:60%; left:80%; animation-delay:2s; }
        .p3 { width:8px;height:8px; top:80%; left:30%; animation-delay:4s; background:rgba(59,130,246,0.4); }
        .p4 { width:3px;height:3px; top:35%; left:70%; animation-delay:1s; }
        @keyframes float-p {
            0%,100% { transform: translateY(0) scale(1); opacity:0.4; }
            50% { transform: translateY(-20px) scale(1.2); opacity:1; }
        }

        .login-card {
            position: relative; z-index: 10;
            width: 420px; max-width: 92vw;
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 20px;
            padding: 2.5rem 2rem;
            box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(108,99,255,0.1);
            backdrop-filter: blur(20px);
            animation: slide-in 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes slide-in {
            from { opacity:0; transform: translateY(30px) scale(0.95); }
            to   { opacity:1; transform: translateY(0)   scale(1); }
        }

        .logo-area {
            text-align: center;
            margin-bottom: 2rem;
        }
        .logo-icon {
            width: 64px; height: 64px;
            background: linear-gradient(135deg, #6c63ff22, #3b82f622);
            border: 1px solid rgba(108,99,255,0.3);
            border-radius: 16px;
            display: inline-flex; align-items: center; justify-content: center;
            font-size: 1.8rem;
            margin-bottom: 1rem;
            box-shadow: 0 0 30px rgba(108,99,255,0.15);
        }
        .logo-title {
            font-size: 1.3rem; font-weight: 700;
            background: linear-gradient(135deg, #a78bfa, #60a5fa);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            margin-bottom: 4px;
        }
        .logo-sub { font-size: 0.78rem; color: #4b5563; letter-spacing: 0.15em; text-transform: uppercase; }

        .security-badge {
            display: flex; align-items: center; gap: 8px;
            background: rgba(108,99,255,0.08);
            border: 1px solid rgba(108,99,255,0.2);
            border-radius: 8px;
            padding: 8px 12px;
            margin-bottom: 1.5rem;
            font-size: 0.75rem; color: #9ca3af;
        }
        .security-badge .dot { width:6px;height:6px;border-radius:50%;background:#4ade80;box-shadow:0 0 8px #4ade80;flex-shrink:0;animation:pulse-dot 2s infinite; }
        @keyframes pulse-dot { 0%,100%{opacity:1;} 50%{opacity:0.4;} }

        .form-group { margin-bottom: 1.2rem; }
        .form-group label {
            display: block;
            font-size: 0.78rem;
            font-weight: 600;
            color: #9ca3af;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 8px;
        }
        .input-wrapper { position: relative; }
        .input-icon {
            position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
            font-size: 1rem; color: #4b5563; pointer-events: none;
        }
        .form-group input {
            width: 100%;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 10px;
            padding: 12px 14px 12px 42px;
            color: #f9fafb;
            font-size: 0.9rem;
            font-family: inherit;
            transition: border-color 0.2s, box-shadow 0.2s;
            outline: none;
        }
        .form-group input:focus {
            border-color: rgba(108,99,255,0.5);
            box-shadow: 0 0 0 3px rgba(108,99,255,0.1);
        }
        .form-group input::placeholder { color: #374151; }

        .btn-login {
            width: 100%;
            background: linear-gradient(135deg, #6c63ff, #3b82f6);
            color: #fff;
            border: none;
            border-radius: 10px;
            padding: 13px;
            font-size: 0.95rem;
            font-weight: 600;
            font-family: inherit;
            cursor: pointer;
            transition: opacity 0.2s, transform 0.1s;
            box-shadow: 0 4px 20px rgba(108,99,255,0.3);
            margin-top: 0.5rem;
        }
        .btn-login:hover { opacity: 0.92; transform: translateY(-1px); }
        .btn-login:active { transform: translateY(0); }

        .error-box {
            background: rgba(239,68,68,0.1);
            border: 1px solid rgba(239,68,68,0.3);
            border-radius: 10px;
            padding: 12px 14px;
            color: #fca5a5;
            font-size: 0.83rem;
            margin-bottom: 1.2rem;
            display: flex; align-items: center; gap: 10px;
        }

        .footer-info {
            margin-top: 1.5rem;
            padding-top: 1.2rem;
            border-top: 1px solid rgba(255,255,255,0.05);
            font-size: 0.72rem;
            color: #374151;
            text-align: center;
            line-height: 1.6;
        }
        .ip-display {
            font-family: monospace;
            color: #4b5563;
            background: rgba(255,255,255,0.03);
            padding: 2px 8px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="bg-canvas"></div>
    <div class="grid-lines"></div>
    <div class="particle p1"></div>
    <div class="particle p2"></div>
    <div class="particle p3"></div>
    <div class="particle p4"></div>

    <div class="login-card">
        <div class="logo-area">
            <div class="logo-icon">🛡️</div>
            <div class="logo-title">WAF Monitor</div>
            <div class="logo-sub">Web Access Log Analyzer</div>
        </div>

        <div class="security-badge">
            <span class="dot"></span>
            <span>Secured Portal — All access attempts are logged. IP: <strong style="color:#6b7280;font-family:monospace;"><?= htmlspecialchars($clientIP) ?></strong></span>
        </div>

        <?php if ($error): ?>
        <div class="error-box">
            <span>⚠️</span>
            <span><?= htmlspecialchars($error) ?></span>
        </div>
        <?php endif; ?>

        <form method="POST" autocomplete="off">
            <div class="form-group">
                <label>Administrator ID</label>
                <div class="input-wrapper">
                    <span class="input-icon">👤</span>
                    <input type="text" name="username" required
                           placeholder="Enter admin username"
                           value="<?= htmlspecialchars($_POST['username'] ?? '') ?>">
                </div>
            </div>
            <div class="form-group">
                <label>Password</label>
                <div class="input-wrapper">
                    <span class="input-icon">🔑</span>
                    <input type="password" name="password" required placeholder="••••••••">
                </div>
            </div>
            <button type="submit" class="btn-login">🔐 Authenticate</button>
        </form>

        <div class="footer-info">
            Restricted Access — Admin Personnel Only<br>
            Your IP <span class="ip-display"><?= htmlspecialchars($clientIP) ?></span> is being monitored.<br>
            Repeated failures will result in automatic IP blocking.
        </div>
    </div>
</body>
</html>
