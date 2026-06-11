<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>403 — Access Denied · WAF Monitor</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
    <style>
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:'Inter',sans-serif;min-height:100vh;background:#fef2f2;display:flex;align-items:center;justify-content:center;overflow:hidden;}
        body::before{content:'';position:fixed;inset:0;background-image:linear-gradient(rgba(239,68,68,0.02)1px,transparent 1px),linear-gradient(90deg,rgba(239,68,68,0.02)1px,transparent 1px);background-size:40px 40px;}
        .glow{position:fixed;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(239,68,68,0.05)0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);animation:pulse 3s ease-in-out infinite;}
        @keyframes pulse{0%,100%{opacity:.6;transform:translate(-50%,-50%)scale(1)}50%{opacity:1;transform:translate(-50%,-50%)scale(1.08)}}
        .panel{position:relative;z-index:10;background:#ffffff;border:1px solid rgba(239,68,68,0.15);border-radius:20px;padding:3rem 2.5rem;max-width:520px;width:90%;text-align:center;box-shadow:0 15px 40px rgba(239,68,68,0.04),0 1px 3px rgba(0,0,0,0.02);}
        .shield{width:72px;height:72px;background:linear-gradient(135deg,#fee2e2,#fecaca);border:1px solid rgba(239,68,68,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.4rem;font-size:1.8rem;box-shadow:0 4px 14px rgba(239,68,68,0.08);}
        .badge{display:inline-block;background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);color:#ef4444;border-radius:20px;padding:4px 14px;font-size:0.75rem;font-weight:700;letter-spacing:.12em;margin-bottom:.8rem;}
        .code{font-size:5rem;font-weight:900;background:linear-gradient(135deg,#ef4444,#dc2626);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;letter-spacing:-0.03em;}
        h1{font-size:.9rem;font-weight:700;color:#ef4444;letter-spacing:.15em;text-transform:uppercase;margin-bottom:.4rem;}
        h2{font-size:1.4rem;color:#991b1b;margin-bottom:1.4rem;font-weight:800;letter-spacing:-0.02em;}
        .divider{width:50px;height:2px;background:linear-gradient(90deg,transparent,#ef4444,transparent);margin:0 auto 1.4rem;}
        .grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1.4rem;text-align:left;}
        .cell{background:#fef2f2;border:1px solid #fee2e2;border-radius:10px;padding:12px;}
        .cell label{font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;color:#991b1b;font-weight:700;display:block;margin-bottom:3px;}
        .cell span{font-size:.85rem;color:#111827;font-weight:700;font-family:monospace;word-break:break-all;}
        .reason{grid-column:span 2;}
        .reason span{font-family:inherit;font-weight:500;color:#b91c1c;}
        .footer{font-size:.78rem;color:#4b5563;line-height:1.7;}
    </style>
</head>
<body>
<div class="glow"></div>
<div class="panel">
    <div class="shield">🛡️</div>
    <span class="badge">SECURITY SYSTEM</span>
    <div class="code">403</div>
    <h1>Forbidden</h1>
    <h2>Access Denied</h2>
    <div class="divider"></div>
    <div class="grid">
        <div class="cell"><label>Your IP</label><span><?= $ip ?></span></div>
        <div class="cell"><label>Blocked Since</label><span><?= $blockedSince ?></span></div>
        <div class="cell reason"><label>Reason</label><span><?= $reason ?></span></div>
    </div>
    <p class="footer">Your IP has been flagged by the automated security system.<br>
    Contact the system administrator if this is a mistake.<br><br>
    <strong>Incident ID:</strong> <?= $incidentId ?></p>
</div>
</body>
</html>
