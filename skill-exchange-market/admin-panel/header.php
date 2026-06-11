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
    <style>
    /* ── Reset ───────────────────────────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
        --bg:        #030712;
        --surface:   rgba(15,23,42,0.85);
        --surface2:  rgba(30,41,59,0.6);
        --border:    rgba(255,255,255,0.07);
        --border2:   rgba(255,255,255,0.12);
        --text:      #f9fafb;
        --text2:     #94a3b8;
        --text3:     #475569;
        --accent:    #6c63ff;
        --accent2:   #3b82f6;
        --red:       #ef4444;
        --green:     #22c55e;
        --yellow:    #f59e0b;
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
    }

    /* ── Scrollbar ───────────────────────────────────────── */
    ::-webkit-scrollbar { width: 5px; height: 5px; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.09); border-radius: 3px; }

    /* ── Topbar ──────────────────────────────────────────── */
    .topbar {
        position: sticky; top: 0; z-index: 100;
        height: 58px;
        display: flex; align-items: center; justify-content: space-between;
        padding: 0 24px;
        background: rgba(3,7,18,0.92);
        border-bottom: 1px solid var(--border);
        backdrop-filter: blur(12px);
    }
    .topbar-left  { display: flex; align-items: center; gap: 24px; }
    .topbar-right { display: flex; align-items: center; gap: 14px; }
    .logo {
        font-size: 1.05rem; font-weight: 700;
        background: linear-gradient(135deg,#a78bfa,#60a5fa);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        text-decoration: none; white-space: nowrap;
    }

    /* ── Nav links ───────────────────────────────────────── */
    .nav-links { display: flex; align-items: center; gap: 4px; }
    .nav-link {
        display: flex; align-items: center; gap: 7px;
        padding: 6px 13px; border-radius: var(--radius-sm);
        font-size: 0.82rem; font-weight: 500; color: var(--text2);
        text-decoration: none;
        transition: all 0.18s;
    }
    .nav-link:hover { background: rgba(255,255,255,0.05); color: var(--text); }
    .nav-link.active { background: rgba(108,99,255,0.12); color: #a78bfa; }
    .nav-link .nav-icon { font-size: 0.9rem; }

    /* ── User pill + logout ──────────────────────────────── */
    .user-pill {
        display: flex; align-items: center; gap: 8px;
        background: rgba(255,255,255,0.04);
        border: 1px solid var(--border2);
        border-radius: 20px; padding: 5px 13px;
        font-size: 0.8rem; color: var(--text2);
    }
    .user-dot { width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 7px var(--green); }
    .btn-logout {
        font-size: 0.78rem; color: var(--text3); text-decoration: none;
        padding: 5px 12px; border: 1px solid var(--border);
        border-radius: var(--radius-sm); transition: all 0.18s;
    }
    .btn-logout:hover { border-color: rgba(239,68,68,0.4); color: #f87171; }

    /* ── Main content wrapper ────────────────────────────── */
    .main { max-width: 1380px; margin: 0 auto; padding: 28px 24px; }

    /* ── Page header ─────────────────────────────────────── */
    .page-header { margin-bottom: 24px; }
    .page-header h1 { font-size: 1.35rem; font-weight: 700; margin-bottom: 4px; }
    .page-header p  { font-size: 0.83rem; color: var(--text3); }

    /* ── Alert flash ─────────────────────────────────────── */
    .alert {
        display: flex; align-items: center; gap: 10px;
        padding: 11px 16px; border-radius: var(--radius-sm);
        margin-bottom: 20px; font-size: 0.86rem;
        animation: fadeSlide 0.3s ease;
    }
    @keyframes fadeSlide { from{opacity:0;transform:translateY(-8px);} to{opacity:1;transform:none;} }
    .alert-success { background:rgba(34,197,94,.1);  border:1px solid rgba(34,197,94,.3);  color:#4ade80; }
    .alert-danger  { background:rgba(239,68,68,.1);  border:1px solid rgba(239,68,68,.3);  color:#f87171; }
    .alert-warning { background:rgba(245,158,11,.1); border:1px solid rgba(245,158,11,.3); color:#fbbf24; }

    /* ── Card ────────────────────────────────────────────── */
    .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        margin-bottom: 22px;
        overflow: hidden;
    }
    .card-header {
        display: flex; align-items: center; justify-content: space-between;
        padding: 15px 20px;
        border-bottom: 1px solid var(--border);
        background: rgba(255,255,255,0.01);
        flex-wrap: wrap; gap: 10px;
    }
    .card-body  { padding: 20px; }
    .card-title { display:flex;align-items:center;gap:9px;font-size:.95rem;font-weight:700; }
    .card-count {
        background: rgba(108,99,255,0.12);
        color: #a78bfa; padding: 2px 10px;
        border-radius: 20px; font-size: 0.7rem; font-weight: 600;
    }

    /* ── Stats grid ──────────────────────────────────────── */
    .stats-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:14px; margin-bottom:24px; }
    @media(max-width:900px){ .stats-grid{grid-template-columns:repeat(2,1fr);} }
    .stat-card {
        background:var(--surface); border:1px solid var(--border); border-radius:var(--radius);
        padding:20px; position:relative; overflow:hidden; transition:border-color .2s;
    }
    .stat-card:hover { border-color:var(--border2); }
    .stat-card::before { content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--line-color,linear-gradient(90deg,#6c63ff,#3b82f6)); }
    .stat-label { font-size:.68rem;text-transform:uppercase;letter-spacing:.1em;color:var(--text3);margin-bottom:8px; }
    .stat-value { font-size:2rem;font-weight:900;line-height:1;color:var(--val-color,var(--text)); }
    .stat-sub   { font-size:.72rem;color:var(--text3);margin-top:6px; }
    .stat-icon  { position:absolute;right:16px;top:50%;transform:translateY(-50%);font-size:2.2rem;opacity:.07; }

    /* ── Table ───────────────────────────────────────────── */
    .table-wrap { overflow-x:auto; }
    table { width:100%;border-collapse:collapse;min-width:640px; }
    th {
        text-align:left;padding:10px 14px;
        font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em;
        color:var(--text3);background:rgba(255,255,255,.02);
        border-bottom:1px solid var(--border);white-space:nowrap;
    }
    td { padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.04);vertical-align:middle; }
    tr:last-child td { border-bottom:none; }
    tr:hover td { background:rgba(255,255,255,.02); }
    .mono { font-family:monospace;font-size:.82rem;color:#a78bfa; }
    .text-muted { color:var(--text3);font-size:.78rem; }
    .nowrap { white-space:nowrap; }

    /* ── Buttons ─────────────────────────────────────────── */
    .btn { display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:var(--radius-sm);font-size:.8rem;font-weight:600;font-family:inherit;cursor:pointer;border:none;text-decoration:none;transition:all .18s;white-space:nowrap; }
    .btn-sm   { padding:5px 10px;font-size:.74rem; }
    .btn-xs   { padding:3px 8px; font-size:.7rem; }
    .btn-primary  { background:linear-gradient(135deg,#6c63ff,#3b82f6);color:#fff;box-shadow:0 2px 10px rgba(108,99,255,.22); }
    .btn-primary:hover  { opacity:.9;transform:translateY(-1px); }
    .btn-danger   { background:rgba(239,68,68,.12);color:#f87171;border:1px solid rgba(239,68,68,.25); }
    .btn-danger:hover   { background:rgba(239,68,68,.22); }
    .btn-warning  { background:rgba(245,158,11,.12);color:#fbbf24;border:1px solid rgba(245,158,11,.25); }
    .btn-warning:hover  { background:rgba(245,158,11,.22); }
    .btn-secondary{ background:rgba(255,255,255,.05);color:var(--text2);border:1px solid var(--border2); }
    .btn-secondary:hover{ background:rgba(255,255,255,.09);color:var(--text); }
    .btn-ghost    { background:none;color:var(--text3);border:1px solid var(--border);padding:5px 10px; }
    .btn-ghost:hover { color:var(--text);border-color:var(--border2); }

    /* ── Form elements ───────────────────────────────────── */
    .form-row   { display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end; }
    .form-group { display:flex;flex-direction:column;gap:6px; }
    .form-label { font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--text3); }
    .form-input {
        background:rgba(255,255,255,.04);border:1px solid var(--border2);border-radius:var(--radius-sm);
        padding:8px 12px;color:var(--text);font-family:inherit;font-size:.85rem;outline:none;
        transition:border-color .18s;
    }
    .form-input:focus { border-color:rgba(108,99,255,.5);box-shadow:0 0 0 3px rgba(108,99,255,.08); }
    .form-input::placeholder { color:var(--text3); }

    /* ── Search box ──────────────────────────────────────── */
    .search-wrap { position:relative;display:inline-flex;align-items:center; }
    .search-wrap i { position:absolute;left:12px;color:var(--text3);font-size:.82rem;pointer-events:none; }
    .search-input {
        background:rgba(255,255,255,.04);border:1px solid var(--border2);border-radius:var(--radius-sm);
        padding:8px 14px 8px 36px;color:var(--text);font-family:inherit;font-size:.84rem;outline:none;
        min-width:240px;transition:border-color .18s;
    }
    .search-input:focus { border-color:rgba(108,99,255,.5); }
    .search-input::placeholder { color:var(--text3); }

    /* ── Pagination ──────────────────────────────────────── */
    .pager { display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding:14px 20px;border-top:1px solid var(--border); }
    .page-btn {
        padding:5px 11px;border-radius:6px;font-size:.78rem;font-weight:500;
        background:rgba(255,255,255,.04);border:1px solid var(--border);color:var(--text2);
        text-decoration:none;transition:all .18s;
    }
    .page-btn:hover  { background:rgba(108,99,255,.12);border-color:rgba(108,99,255,.3);color:#a78bfa; }
    .page-btn.active { background:linear-gradient(135deg,#6c63ff,#3b82f6);border-color:transparent;color:#fff; }
    .pager-info { font-size:.75rem;color:var(--text3);margin-left:6px; }

    /* ── Empty state ─────────────────────────────────────── */
    .empty-state { text-align:center;padding:3.5rem;color:var(--text3); }
    .empty-state i { font-size:2.2rem;margin-bottom:1rem;opacity:.3; }
    .empty-state p { font-size:.85rem; }

    /* ── Modal ───────────────────────────────────────────── */
    .modal-bg { display:none;position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:999;align-items:center;justify-content:center;backdrop-filter:blur(4px); }
    .modal-bg.open { display:flex; }
    .modal-box { background:#0f172a;border:1px solid var(--border2);border-radius:16px;padding:2rem;max-width:430px;width:90%;animation:pop .2s ease; }
    @keyframes pop { from{opacity:0;transform:scale(.95);} to{opacity:1;transform:scale(1);} }
    .modal-title { font-size:1rem;font-weight:700;margin-bottom:1.2rem; }
    .modal-footer { display:flex;gap:10px;justify-content:flex-end;margin-top:1.2rem; }

    /* ── Responsive ──────────────────────────────────────── */
    @media(max-width:640px){
        .topbar { padding:0 14px; }
        .main   { padding:18px 14px; }
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
