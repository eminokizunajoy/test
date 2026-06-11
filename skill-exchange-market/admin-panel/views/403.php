<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>403 — Access Denied · WAF Monitor</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
    <style>
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:'Inter',sans-serif;min-height:100vh;background:#030712;display:flex;align-items:center;justify-content:center;overflow:hidden;}
        body::before{content:'';position:fixed;inset:0;background-image:linear-gradient(rgba(239,68,68,0.03)1px,transparent 1px),linear-gradient(90deg,rgba(239,68,68,0.03)1px,transparent 1px);background-size:40px 40px;}
        .glow{position:fixed;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(239,68,68,0.12)0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);animation:pulse 3s ease-in-out infinite;}
        @keyframes pulse{0%,100%{opacity:.6;transform:translate(-50%,-50%)scale(1)}50%{opacity:1;transform:translate(-50%,-50%)scale(1.08)}}
        .panel{position:relative;z-index:10;background:linear-gradient(135deg,rgba(30,10,10,0.95),rgba(15,5,5,0.98));border:1px solid rgba(239,68,68,0.25);border-radius:20px;padding:3rem 2.5rem;max-width:520px;width:90%;text-align:center;box-shadow:0 0 60px rgba(239,68,68,0.12),0 25px 50px rgba(0,0,0,0.5);}
        .shield{width:72px;height:72px;background:linear-gradient(135deg,#7f1d1d,#450a0a);border:1px solid rgba(239,68,68,0.35);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.4rem;font-size:1.8rem;box-shadow:0 0 28px rgba(239,68,68,0.25);}
        .badge{display:inline-block;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);color:#f87171;border-radius:20px;padding:3px 12px;font-size:0.7rem;letter-spacing:.15em;margin-bottom:.8rem;}
        .code{font-size:5rem;font-weight:900;background:linear-gradient(135deg,#ef4444,#dc2626);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;}
        h1{font-size:.9rem;font-weight:600;color:#f87171;letter-spacing:.2em;text-transform:uppercase;margin-bottom:.4rem;}
        h2{font-size:1.3rem;color:#fca5a5;margin-bottom:1.4rem;}
        .divider{width:50px;height:2px;background:linear-gradient(90deg,transparent,#ef4444,transparent);margin:0 auto 1.4rem;}
        .grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1.4rem;text-align:left;}
        .cell{background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.12);border-radius:10px;padding:12px;}
        .cell label{font-size:.65rem;text-transform:uppercase;letter-spacing:.1em;color:#6b7280;display:block;margin-bottom:3px;}
        .cell span{font-size:.82rem;color:#f9fafb;font-weight:600;font-family:monospace;word-break:break-all;}
        .reason{grid-column:span 2;}
        .reason span{font-family:inherit;font-weight:400;color:#fca5a5;}
        .footer{font-size:.72rem;color:#374151;line-height:1.7;}
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
