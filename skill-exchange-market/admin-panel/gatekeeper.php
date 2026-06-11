<?php
// ============================================================
// gatekeeper.php — IP Blacklist Check (include at top of every page)
// ============================================================
require_once __DIR__ . '/config.php';

$clientIP = getClientIP();

$db = getDB();
$stmt = $db->prepare("SELECT reason, blocked_at FROM ip_blacklist WHERE ip_address = ? LIMIT 1");
$stmt->bind_param('s', $clientIP);
$stmt->execute();
$result = $stmt->get_result();
$blocked = $result->fetch_assoc();
$stmt->close();

if ($blocked) {
    // Log blocked attempt
    logAccess($clientIP, 'page_visit', 'blocked');
    http_response_code(403);
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>403 — Access Denied</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
            background: #030712;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        /* Animated grid background */
        body::before {
            content: '';
            position: fixed;
            inset: 0;
            background-image:
                linear-gradient(rgba(239,68,68,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239,68,68,0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            animation: grid-move 20s linear infinite;
        }
        @keyframes grid-move { from { transform: translate(0,0); } to { transform: translate(40px,40px); } }

        /* Red glow */
        .glow-orb {
            position: fixed;
            width: 500px; height: 500px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%);
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes pulse-glow {
            0%,100% { opacity: 0.6; transform: translate(-50%,-50%) scale(1); }
            50% { opacity: 1; transform: translate(-50%,-50%) scale(1.1); }
        }

        .panel {
            position: relative;
            z-index: 10;
            background: linear-gradient(135deg, rgba(30,10,10,0.95), rgba(15,5,5,0.98));
            border: 1px solid rgba(239,68,68,0.3);
            border-radius: 20px;
            padding: 3rem 2.5rem;
            max-width: 540px;
            width: 90%;
            text-align: center;
            box-shadow: 0 0 60px rgba(239,68,68,0.15), 0 25px 50px rgba(0,0,0,0.5);
            backdrop-filter: blur(20px);
        }
        .shield-icon {
            width: 80px; height: 80px;
            background: linear-gradient(135deg, #7f1d1d, #450a0a);
            border: 1px solid rgba(239,68,68,0.4);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 2rem;
            box-shadow: 0 0 30px rgba(239,68,68,0.3);
        }
        h1 {
            font-size: 1rem;
            font-weight: 600;
            color: #f87171;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }
        .code {
            font-size: 5rem;
            font-weight: 900;
            background: linear-gradient(135deg, #ef4444, #dc2626);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1;
            margin-bottom: 0.5rem;
        }
        h2 { font-size: 1.4rem; color: #fca5a5; margin-bottom: 1.5rem; font-weight: 600; }
        .divider {
            width: 60px; height: 2px;
            background: linear-gradient(90deg, transparent, #ef4444, transparent);
            margin: 0 auto 1.5rem;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 1.5rem;
            text-align: left;
        }
        .info-card {
            background: rgba(239,68,68,0.07);
            border: 1px solid rgba(239,68,68,0.15);
            border-radius: 10px;
            padding: 12px 14px;
        }
        .info-card label {
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #9ca3af;
            display: block;
            margin-bottom: 4px;
        }
        .info-card span {
            font-size: 0.85rem;
            color: #f9fafb;
            font-weight: 600;
            font-family: monospace;
            word-break: break-all;
        }
        .reason-box {
            background: rgba(239,68,68,0.08);
            border: 1px solid rgba(239,68,68,0.2);
            border-radius: 10px;
            padding: 14px;
            margin-bottom: 1.5rem;
            font-size: 0.85rem;
            color: #fca5a5;
            line-height: 1.5;
        }
        .footer-text {
            font-size: 0.75rem;
            color: #4b5563;
            line-height: 1.6;
        }
        .footer-text a { color: #6b7280; text-decoration: none; }
        .badge {
            display: inline-block;
            background: rgba(239,68,68,0.1);
            border: 1px solid rgba(239,68,68,0.2);
            color: #f87171;
            border-radius: 20px;
            padding: 4px 12px;
            font-size: 0.72rem;
            letter-spacing: 0.08em;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <div class="glow-orb"></div>
    <div class="panel">
        <div class="shield-icon">🛡️</div>
        <div class="badge">SECURITY SYSTEM ACTIVE</div>
        <div class="code">403</div>
        <h1>Forbidden</h1>
        <h2>Access Denied</h2>
        <div class="divider"></div>
        <div class="info-grid">
            <div class="info-card">
                <label>Your IP Address</label>
                <span><?= htmlspecialchars($clientIP) ?></span>
            </div>
            <div class="info-card">
                <label>Blocked Since</label>
                <span><?= htmlspecialchars(date('Y-m-d H:i', strtotime($blocked['blocked_at']))) ?></span>
            </div>
            <div class="info-card" style="grid-column:span 2">
                <label>Block Reason</label>
                <span style="font-family:inherit;font-weight:400;color:#fca5a5;"><?= htmlspecialchars($blocked['reason']) ?></span>
            </div>
        </div>
        <p class="footer-text">
            Your IP address has been flagged by our automated security system.<br>
            If you believe this is a mistake, please contact the system administrator.<br><br>
            <strong>Incident ID:</strong> <?= strtoupper(substr(md5($clientIP . date('Y-m-d')), 0, 12)) ?>
        </p>
    </div>
</body>
</html>
    <?php
    exit;
}
?>
