<?php
// ============================================================
// header.php — Shared HTML head + navigation
// Variables expected: $pageTitle (string), $activePage (string)
// ============================================================
$pageTitle  = $pageTitle  ?? 'WAF Monitor';
$activePage = $activePage ?? '';
$adminUser  = $_SESSION['admin_user'] ?? 'admin';
$currentIP  = getClientIP();

$navItems = [
    'dashboard'  => ['label' => 'Dashboard',   'icon' => '📊', 'href' => BASE_URL . '/dashboard.php'],
    'logs'       => ['label' => 'Access Logs',  'icon' => '📋', 'href' => BASE_URL . '/logs.php'],
    'blacklist'  => ['label' => 'IP Blacklist', 'icon' => '🚫', 'href' => BASE_URL . '/blacklist.php'],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e($pageTitle) ?> · WAF Monitor</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    /* ── Reset ───────────────────────────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
        --bg:        #f6f8fa;
        --surface:   #ffffff;
        --surface2:  #f8fafc;
        --border:    #e8ecef;
        --border2:   #d1d5db;
        --text:      #111111;
        --text2:     #444444;
        --text3:     #777777;
        --accent:    #0054E5; /* Behance Blue */
        --accent2:   #003eb3;
        --red:       #ff3b30;
        --green:     #34c759;
        --yellow:    #ff9500;
        --radius:    12px;
        --radius-sm: 8px;
    }
    body {
        font-family: 'Inter', sans-serif;
        background: var(--bg);
        color: var(--text);
        min-height: 100vh;
        font-size: 14px;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /* ── Scrollbar ───────────────────────────────────────── */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }

    /* ── Topbar ──────────────────────────────────────────── */
    .topbar {
        position: sticky; top: 0; z-index: 100;
        height: 64px;
        display: flex; align-items: center; justify-content: space-between;
        padding: 0 24px;
        background: #191919; /* Behance dark bar */
        border-bottom: 1px solid #2e2e2e;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    .topbar-left  { display: flex; align-items: center; gap: 32px; }
    .topbar-right { display: flex; align-items: center; gap: 16px; }
    
    .logo {
        font-size: 1.2rem; font-weight: 900;
        color: #ffffff;
        text-decoration: none; white-space: nowrap;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        display: flex; align-items: center; gap: 6px;
    }
    .logo span {
        color: var(--accent);
    }

    /* ── Nav links ───────────────────────────────────────── */
    .nav-links { display: flex; align-items: center; gap: 6px; }
    .nav-link {
        display: flex; align-items: center; gap: 8px;
        padding: 8px 16px; border-radius: 30px; /* Pill style */
        font-size: 0.78rem; font-weight: 700; color: #9a9a9a;
        text-decoration: none; text-transform: uppercase; letter-spacing: 0.04em;
        transition: all 0.2s ease;
    }
    .nav-link:hover { color: #ffffff; background: rgba(255, 255, 255, 0.05); }
    .nav-link.active { background: #ffffff; color: #111111; font-weight: 800; }
    .nav-link .nav-icon { font-size: 0.95rem; }

    /* ── User pill + logout ──────────────────────────────── */
    .user-pill {
        display: flex; align-items: center; gap: 8px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px; padding: 6px 14px;
        font-size: 0.78rem; color: #e2e8f0; font-weight: 600;
    }
    .user-dot { width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow: 0 0 8px var(--green); }
    
    .btn-logout {
        font-size: 0.78rem; color: #ffffff; text-decoration: none;
        padding: 8px 18px; background: var(--accent); border: none;
        border-radius: 30px; transition: all 0.2s; font-weight: 700;
        text-transform: uppercase; letter-spacing: 0.02em;
        box-shadow: 0 4px 10px rgba(0, 84, 229, 0.2);
    }
    .btn-logout:hover { background: var(--accent2); box-shadow: 0 6px 16px rgba(0, 84, 229, 0.35); }

    /* ── Main content wrapper ────────────────────────────── */
    .main { max-width: 1400px; margin: 0 auto; padding: 40px 24px; }

    /* ── Page header ─────────────────────────────────────── */
    .page-header { margin-bottom: 32px; }
    .page-header h1 { font-size: 2rem; font-weight: 800; color: var(--text); letter-spacing: -0.03em; margin-bottom: 6px; }
    .page-header p  { font-size: 0.92rem; color: var(--text3); }

    /* ── Alert flash ─────────────────────────────────────── */
    .alert {
        display: flex; align-items: center; gap: 10px;
        padding: 14px 20px; border-radius: var(--radius-sm);
        margin-bottom: 24px; font-size: 0.9rem; font-weight: 600;
        animation: fadeSlide 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
    }
    @keyframes fadeSlide { from{opacity:0;transform:translateY(-8px);} to{opacity:1;transform:none;} }
    .alert-success { background: #e6fcf5; border: 1px solid #c3fae8; color: #0ca678; }
    .alert-danger  { background: #fff5f5; border: 1px solid #ffe3e3; color: #fa5252; }
    .alert-warning { background: #fff9db; border: 1px solid #fff3bf; color: #f59f00; }

    /* ── Card ────────────────────────────────────────────── */
    .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        margin-bottom: 24px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.02);
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .card-header {
        display: flex; align-items: center; justify-content: space-between;
        padding: 20px 24px;
        border-bottom: 1px solid var(--border);
        background: #ffffff;
        flex-wrap: wrap; gap: 10px;
    }
    .card-body  { padding: 24px; }
    .card-title { display:flex;align-items:center;gap:9px;font-size:0.95rem;font-weight:800;color: var(--text);text-transform: uppercase; letter-spacing: 0.03em; }
    .card-count {
        background: #f1f3f5;
        color: #495057; padding: 3px 10px;
        border-radius: 20px; font-size: 0.72rem; font-weight: 700;
    }

    /* ── Behance-Style Stats Grid ────────────────────────── */
    .stats-grid { display:grid; grid-template-columns:repeat(5, 1fr); gap:20px; margin-bottom:32px; }
    @media(max-width:1200px){ .stats-grid{grid-template-columns:repeat(3, 1fr);} }
    @media(max-width:768px){ .stats-grid{grid-template-columns:repeat(2, 1fr);} }
    @media(max-width:480px){ .stats-grid{grid-template-columns:1fr;} }
    
    .stat-card {
        background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
        display: flex; flex-direction: column; overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease;
    }
    .stat-card:hover { 
        transform: translateY(-4px); 
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.06); 
        border-color: var(--border2); 
    }
    .stat-card-cover {
        height: 100px;
        background: var(--line-color, linear-gradient(135deg, #3b82f6, #0054E5));
        display: flex; align-items: center; justify-content: center;
        position: relative;
        overflow: hidden;
    }
    .stat-card-cover::after {
        content: ''; position: absolute; inset: 0;
        background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 60%);
    }
    .stat-card-cover i {
        font-size: 2.5rem; color: #ffffff;
        filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15));
        transition: transform 0.3s ease;
        z-index: 2;
    }
    .stat-card:hover .stat-card-cover i {
        transform: scale(1.1) rotate(-3deg);
    }
    .stat-card-body {
        padding: 20px;
        background: #ffffff;
        flex-grow: 1;
        display: flex; flex-direction: column;
    }
    .stat-label { font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:6px;font-weight:700; }
    .stat-value { font-size:1.85rem;font-weight:800;line-height:1.2;color:var(--text);letter-spacing:-0.02em; }
    .stat-sub   { font-size:.78rem;color:var(--text3);margin-top:6px; }

    /* ── Table ───────────────────────────────────────────── */
    .table-wrap { overflow-x:auto; }
    table { width:100%;border-collapse:collapse;min-width:640px; }
    th {
        text-align:left;padding:14px 18px;
        font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;
        color:#495057;background:#f8f9fa;
        border-bottom:1px solid var(--border);white-space:nowrap;
    }
    td { padding:16px 18px;border-bottom:1px solid #f1f3f5;vertical-align:middle;color: var(--text);font-size: 0.88rem; }
    tr:last-child td { border-bottom:none; }
    tr:hover td { background: #f8f9fa; }
    .mono { font-family:monospace;font-size:.85rem;color:var(--accent);font-weight:600; }
    .text-muted { color:var(--text3);font-size:.8rem; }
    .nowrap { white-space:nowrap; }

    /* ── Buttons ─────────────────────────────────────────── */
    .btn { display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border-radius:30px;font-size:.8rem;font-weight:700;font-family:inherit;cursor:pointer;border:none;text-decoration:none;transition:all 0.2s ease;white-space:nowrap; }
    .btn-sm   { padding:6px 14px;font-size:.78rem; }
    .btn-xs   { padding:4px 10px; font-size:.72rem; border-radius: 20px; }
    .btn-primary  { background: var(--accent); color:#fff; box-shadow: 0 4px 10px rgba(0, 84, 229, 0.15); }
    .btn-primary:hover  { background: var(--accent2); transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0, 84, 229, 0.25); }
    .btn-danger   { background: #fff5f5; color:#fa5252; border:1px solid #ffe3e3; }
    .btn-danger:hover   { background: #fa5252; color:#fff; border-color: transparent; }
    .btn-warning  { background: #fff9db; color:#f59f00; border:1px solid #fff3bf; }
    .btn-warning:hover  { background: #f59f00; color:#fff; border-color: transparent; }
    .btn-secondary{ background: #f1f3f5; color: #495057; border: 1px solid #dee2e6; }
    .btn-secondary:hover{ background: #e9ecef; color: #212529; }
    .btn-ghost    { background:none;color:var(--text3);border:1px solid var(--border);padding:6px 14px; }
    .btn-ghost:hover { color:var(--text);border-color:var(--border2);background: #f8fafc; }

    /* ── Form elements ───────────────────────────────────── */
    .form-row   { display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end; }
    .form-group { display:flex;flex-direction:column;gap:6px; }
    .form-label { font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text2); }
    .form-input {
        background: #ffffff; border: 1px solid var(--border2); border-radius: var(--radius-sm);
        padding: 9px 14px; color: var(--text); font-family: inherit; font-size: .88rem; outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
    }
    .form-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(0, 84, 229, 0.08); }
    .form-input::placeholder { color: #adb5bd; }

    /* ── Search box (Behance Style) ──────────────────────── */
    .search-wrap { position:relative;display:inline-flex;align-items:center; }
    .search-wrap i { position:absolute;left:16px;color:#868e96;font-size:.9rem;pointer-events:none; }
    .search-input {
        background: #f1f3f5; border: 1px solid transparent; border-radius: 30px; /* Capsule shape */
        padding: 10px 18px 10px 44px; color: var(--text); font-family: inherit; font-size: .9rem; outline: none;
        min-width: 300px; transition: all 0.2s ease;
    }
    .search-input:focus { background: #ffffff; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(0, 84, 229, 0.08); }
    .search-input::placeholder { color: #868e96; }

    /* ── Pagination ──────────────────────────────────────── */
    .pager { display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding:16px 24px;border-top:1px solid var(--border); background: #ffffff; }
    .page-btn {
        padding:6px 14px;border-radius: 20px;font-size:.8rem;font-weight:600;
        background: #f1f3f5;border:1px solid #dee2e6;color:#495057;
        text-decoration:none;transition:all 0.2s;
    }
    .page-btn:hover  { background: rgba(0, 84, 229, 0.05); border-color: rgba(0, 84, 229, 0.15); color: var(--accent); }
    .page-btn.active { background: var(--accent); border-color: transparent; color: #fff; box-shadow: 0 4px 10px rgba(0, 84, 229, 0.15); }
    .pager-info { font-size:.78rem;color:var(--text3);margin-left:8px; }

    /* ── Empty state ─────────────────────────────────────── */
    .empty-state { text-align:center;padding:4rem;color:var(--text3); }
    .empty-state i { font-size:2.5rem;margin-bottom:1rem;color:#dee2e6; }
    .empty-state p { font-size:.9rem; }

    /* ── Modal ───────────────────────────────────────────── */
    .modal-bg { display:none;position:fixed;inset:0;background:rgba(15, 23, 42, 0.4);z-index:999;align-items:center;justify-content:center;backdrop-filter:blur(4px); }
    .modal-bg.open { display:flex; }
    .modal-box { background:#ffffff;border:1px solid var(--border);border-radius:20px;padding:2.5rem;max-width:460px;width:90%;box-shadow: 0 20px 50px -12px rgba(0,0,0,0.1);animation:pop .25s cubic-bezier(.34,1.56,.64,1); }
    @keyframes pop { from{opacity:0;transform:scale(.92) translateY(10px);} to{opacity:1;transform:scale(1);} }
    .modal-title { font-size:1.1rem;font-weight:900;margin-bottom:1.4rem;color: var(--text);letter-spacing: -0.02em; text-transform: uppercase; }
    .modal-footer { display:flex;gap:12px;justify-content:flex-end;margin-top:1.5rem; }

    /* ── Responsive ──────────────────────────────────────── */
    @media(max-width:640px){
        .topbar { padding:0 16px; }
        .main   { padding:30px 16px; }
        .nav-links { display:none; }
    }
    </style>
</head>
<body>

<nav class="topbar">
    <div class="topbar-left">
        <a href="<?= BASE_URL ?>/dashboard.php" class="logo">WAF <span>MONITOR.</span></a>
        <div class="nav-links">
            <?php foreach ($navItems as $key => $item): ?>
            <a href="<?= $item['href'] ?>" class="nav-link <?= $activePage === $key ? 'active' : '' ?>">
                <?= $item['label'] ?>
            </a>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="topbar-right">
        <span style="font-family:monospace;font-size:.72rem;color:#9a9a9a;"><?= e($currentIP) ?></span>
        <div class="user-pill"><span class="user-dot"></span><?= e($adminUser) ?></div>
        <a href="<?= BASE_URL ?>/logout.php" class="btn-logout">Sign Out</a>
    </div>
</nav>c-bezier(.34,1.56,.64,1); }
    @keyframes pop { from{opacity:0;transform:scale(.92) translateY(10px);} to{opacity:1;transform:scale(1);} }
    .modal-title { font-size:1.15rem;font-weight:800;margin-bottom:1.4rem;color: var(--text);letter-spacing: -0.02em; }
    .modal-footer { display:flex;gap:12px;justify-content:flex-end;margin-top:1.5rem; }

    /* ── Responsive ──────────────────────────────────────── */
    @media(max-width:640px){
        .topbar { padding:0 16px; }
        .main   { padding:24px 16px; }
        .nav-links { display:none; }
    }
    </style>
</head>
<body>

<nav class="topbar">
    <div class="topbar-left">
        <a href="<?= BASE_URL ?>/dashboard.php" class="logo">🛡️ WAF Monitor</a>
        <div class="nav-links">
            <?php foreach ($navItems as $key => $item): ?>
            <a href="<?= $item['href'] ?>" class="nav-link <?= $activePage === $key ? 'active' : '' ?>">
                <span class="nav-icon"><?= $item['icon'] ?></span>
                <?= $item['label'] ?>
            </a>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="topbar-right">
        <span style="font-family:monospace;font-size:.75rem;color:var(--text3);"><?= e($currentIP) ?></span>
        <div class="user-pill"><span class="user-dot"></span><?= e($adminUser) ?></div>
        <a href="<?= BASE_URL ?>/logout.php" class="btn-logout">Sign Out</a>
    </div>
</nav>

<main class="main">
<?= renderFlash() ?>
