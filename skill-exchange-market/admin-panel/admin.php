<?php
// ============================================================
// admin.php — Full Admin Dashboard (CRUD: Logs + IP Blacklist)
// ============================================================
require_once __DIR__ . '/gatekeeper.php';  // IP blacklist check
requireAdmin();                             // Session auth check

$db        = getDB();
$clientIP  = getClientIP();
$adminUser = $_SESSION['admin_user'] ?? 'admin';
$msg       = '';
$msgType   = 'success';

// ══════════════════════════════════════════════
// POST ACTIONS (Create / Update / Delete)
// ══════════════════════════════════════════════

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    // ── [INSERT] Manual Block IP ──
    if ($action === 'block_ip') {
        $ip     = trim($_POST['ip_address'] ?? '');
        $reason = trim($_POST['reason'] ?? 'Manually blocked by administrator');
        if (filter_var($ip, FILTER_VALIDATE_IP) && $ip !== '') {
            $stmt = $db->prepare("INSERT INTO ip_blacklist (ip_address, reason, blocked_by) VALUES (?,?,?) ON DUPLICATE KEY UPDATE reason=VALUES(reason), blocked_by=VALUES(blocked_by), updated_at=NOW()");
            $stmt->bind_param('sss', $ip, $reason, $adminUser);
            $stmt->execute(); $stmt->close();
            logAccess($clientIP, 'manual_block', 'success', $adminUser);
            $msg = "✅ IP <strong>$ip</strong> has been blocked.";
        } else {
            $msg = "❌ Invalid IP address."; $msgType = 'danger';
        }
    }

    // ── [UPDATE] Edit block reason ──
    if ($action === 'update_reason') {
        $id     = (int)($_POST['bl_id'] ?? 0);
        $reason = trim($_POST['new_reason'] ?? '');
        if ($id > 0 && $reason !== '') {
            $stmt = $db->prepare("UPDATE ip_blacklist SET reason=?, updated_at=NOW() WHERE id=?");
            $stmt->bind_param('si', $reason, $id);
            $stmt->execute(); $stmt->close();
            $msg = "✅ Block reason updated.";
        }
    }

    // ── [DELETE] Unblock IP ──
    if ($action === 'unblock_ip') {
        $id = (int)($_POST['bl_id'] ?? 0);
        if ($id > 0) {
            $stmt = $db->prepare("DELETE FROM ip_blacklist WHERE id=?");
            $stmt->bind_param('i', $id);
            $stmt->execute(); $stmt->close();
            $msg = "✅ IP has been unblocked and removed from blacklist.";
        }
    }

    // ── [DELETE] Clear single log ──
    if ($action === 'delete_log') {
        $id = (int)($_POST['log_id'] ?? 0);
        if ($id > 0) {
            $stmt = $db->prepare("DELETE FROM access_logs WHERE id=?");
            $stmt->bind_param('i', $id);
            $stmt->execute(); $stmt->close();
            $msg = "✅ Log entry #$id deleted.";
        }
    }

    // ── [DELETE] Clear all logs for an IP ──
    if ($action === 'clear_ip_logs') {
        $ip = trim($_POST['ip_address'] ?? '');
        if (filter_var($ip, FILTER_VALIDATE_IP)) {
            $stmt = $db->prepare("DELETE FROM access_logs WHERE ip_address=?");
            $stmt->bind_param('s', $ip);
            $stmt->execute(); $stmt->close();
            $msg = "✅ All logs for <strong>$ip</strong> cleared.";
        }
    }
}

// ══════════════════════════════════════════════
// READ — Fetch Stats
// ══════════════════════════════════════════════
$stats = $db->query("SELECT
    COUNT(*) AS total_logs,
    SUM(status='failed') AS failed_count,
    SUM(status='blocked') AS blocked_count,
    SUM(status='success') AS success_count,
    COUNT(DISTINCT ip_address) AS unique_ips
  FROM access_logs")->fetch_assoc();

$blacklistCount = $db->query("SELECT COUNT(*) AS cnt FROM ip_blacklist")->fetch_assoc()['cnt'];

// ── Read: Access Logs with search ──
$search = trim($_GET['q'] ?? '');
$page   = max(1, (int)($_GET['p'] ?? 1));
$limit  = 20;
$offset = ($page - 1) * $limit;

if ($search !== '') {
    $safe = $db->real_escape_string($search);
    $whereClause = "WHERE ip_address LIKE '%$safe%' OR username LIKE '%$safe%' OR action LIKE '%$safe%' OR status LIKE '%$safe%'";
} else {
    $whereClause = '';
}

$totalRows = $db->query("SELECT COUNT(*) AS cnt FROM access_logs $whereClause")->fetch_assoc()['cnt'];
$totalPages = max(1, ceil($totalRows / $limit));

$logsResult = $db->query("SELECT * FROM access_logs $whereClause ORDER BY created_at DESC LIMIT $limit OFFSET $offset");

// ── Read: IP Blacklist ──
$blackSearch = trim($_GET['bq'] ?? '');
if ($blackSearch !== '') {
    $bsafe = $db->real_escape_string($blackSearch);
    $blackWhere = "WHERE ip_address LIKE '%$bsafe%' OR reason LIKE '%$bsafe%'";
} else {
    $blackWhere = '';
}
$blacklistResult = $db->query("SELECT * FROM ip_blacklist $blackWhere ORDER BY blocked_at DESC");

// ── Helper: status badge HTML ──
function statusBadge(string $status): string {
    $map = [
        'success' => ['#4ade80', '#052e16', '✅'],
        'failed'  => ['#f87171', '#450a0a', '❌'],
        'blocked' => ['#fb923c', '#431407', '🚫'],
        'visit'   => ['#60a5fa', '#0c1a2e', '👁️'],
    ];
    [$color, $bg, $icon] = $map[$status] ?? ['#9ca3af', '#111827', '•'];
    return "<span style='background:{$bg};color:{$color};border:1px solid {$color}33;padding:3px 9px;border-radius:20px;font-size:0.72rem;font-weight:600;white-space:nowrap;'>{$icon} {$status}</span>";
}

function actionBadge(string $action): string {
    $map = [
        'login_attempt'  => ['#a78bfa', '🔒'],
        'login_failed'   => ['#f87171', '⚠️'],
        'login_success'  => ['#4ade80', '✅'],
        'page_visit'     => ['#60a5fa', '🌐'],
        'manual_block'   => ['#fb923c', '🔨'],
    ];
    [$color, $icon] = $map[$action] ?? ['#9ca3af', '•'];
    return "<span style='color:{$color};font-size:0.8rem;'>{$icon} {$action}</span>";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WAF Monitor — Admin Dashboard</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin:0; padding:0; }
        :root {
            --bg: #030712;
            --surface: rgba(15,23,42,0.8);
            --surface2: rgba(30,41,59,0.5);
            --border: rgba(255,255,255,0.07);
            --border2: rgba(255,255,255,0.12);
            --text: #f9fafb;
            --text2: #94a3b8;
            --text3: #475569;
            --accent: #6c63ff;
            --accent2: #3b82f6;
            --red: #ef4444;
            --green: #22c55e;
            --orange: #f59e0b;
            --radius: 12px;
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
        /* Scrollbar */
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }

        /* ── Top nav ── */
        .topbar {
            position: sticky; top: 0; z-index: 100;
            display: flex; align-items: center; justify-content: space-between;
            padding: 0 24px;
            height: 60px;
            background: rgba(3,7,18,0.9);
            border-bottom: 1px solid var(--border);
            backdrop-filter: blur(12px);
        }
        .topbar-left { display: flex; align-items: center; gap: 12px; }
        .topbar-logo { font-size: 1.1rem; font-weight: 700; background: linear-gradient(135deg,#a78bfa,#60a5fa); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .topbar-badge { background: rgba(108,99,255,0.15); border: 1px solid rgba(108,99,255,0.3); color: #a78bfa; padding: 3px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em; }
        .topbar-right { display: flex; align-items: center; gap: 16px; font-size: 0.82rem; color: var(--text2); }
        .admin-pill { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.04); border: 1px solid var(--border2); border-radius: 20px; padding: 5px 14px; }
        .admin-pill .dot { width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 8px var(--green); }
        .btn-logout { color: var(--text3); text-decoration:none; font-size:0.82rem; padding: 6px 14px; border: 1px solid var(--border); border-radius: 8px; transition: all 0.2s; }
        .btn-logout:hover { border-color: rgba(239,68,68,0.4); color: #f87171; }

        /* ── Layout ── */
        .main { max-width: 1400px; margin: 0 auto; padding: 28px 24px; }

        /* ── Alert ── */
        .alert {
            padding: 12px 16px; border-radius: var(--radius-sm);
            margin-bottom: 20px; font-size: 0.88rem;
            display: flex; align-items: center; gap: 10px;
            animation: slide-down 0.3s ease;
        }
        @keyframes slide-down { from { opacity:0;transform:translateY(-10px); } to { opacity:1;transform:none; } }
        .alert-success { background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3); color: #4ade80; }
        .alert-danger  { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); color: #f87171; }

        /* ── Section title ── */
        .section-title {
            display: flex; align-items: center; gap: 10px;
            font-size: 1rem; font-weight: 700; color: var(--text);
            margin-bottom: 16px;
        }
        .section-title .icon { font-size: 1.1rem; }
        .section-title .count { background: rgba(108,99,255,0.15); color: #a78bfa; padding: 2px 10px; border-radius: 20px; font-size: 0.72rem; font-weight: 600; }

        /* ── Stats Grid ── */
        .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-bottom: 28px; }
        @media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } .stats-grid .stat-card:last-child { grid-column: span 2; } }
        .stat-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 20px;
            position: relative; overflow: hidden;
            transition: border-color 0.2s;
        }
        .stat-card:hover { border-color: var(--border2); }
        .stat-card::before {
            content: '';
            position: absolute; top: 0; left: 0; right: 0; height: 2px;
            background: var(--card-accent, linear-gradient(90deg,#6c63ff,#3b82f6));
        }
        .stat-card .label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text3); margin-bottom: 8px; }
        .stat-card .value { font-size: 2rem; font-weight: 900; line-height: 1; color: var(--text); }
        .stat-card .sub { font-size: 0.75rem; color: var(--text3); margin-top: 6px; }
        .stat-card .stat-icon { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); font-size: 2rem; opacity: 0.08; }

        /* ── Cards ── */
        .card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            margin-bottom: 24px;
            overflow: hidden;
        }
        .card-header {
            display: flex; align-items: center; justify-content: space-between;
            padding: 16px 20px;
            border-bottom: 1px solid var(--border);
            background: rgba(255,255,255,0.01);
            flex-wrap: wrap; gap: 10px;
        }
        .card-body { padding: 20px; }

        /* ── Search box ── */
        .search-box {
            display: flex; align-items: center; gap: 10px;
            background: rgba(255,255,255,0.04);
            border: 1px solid var(--border2);
            border-radius: 10px;
            padding: 8px 14px;
            min-width: 260px;
        }
        .search-box i { color: var(--text3); font-size: 0.85rem; }
        .search-box input {
            background: none; border: none; outline: none;
            color: var(--text); font-family: inherit; font-size: 0.85rem;
            width: 100%;
        }
        .search-box input::placeholder { color: var(--text3); }

        /* ── Table ── */
        .table-wrap { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; min-width: 700px; }
        th {
            text-align: left; padding: 10px 14px;
            font-size: 0.7rem; font-weight: 600;
            text-transform: uppercase; letter-spacing: 0.1em;
            color: var(--text3); background: rgba(255,255,255,0.02);
            border-bottom: 1px solid var(--border);
            white-space: nowrap;
        }
        td { padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: middle; }
        tr:last-child td { border-bottom: none; }
        tr:hover td { background: rgba(255,255,255,0.02); }
        .mono { font-family: monospace; font-size: 0.82rem; color: #a78bfa; }
        .ua-text { font-size: 0.75rem; color: var(--text3); max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .time-text { font-size: 0.75rem; color: var(--text3); white-space: nowrap; }

        /* ── Buttons ── */
        .btn { display: inline-flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: 600; font-family: inherit; cursor: pointer; border: none; text-decoration: none; transition: all 0.2s; white-space: nowrap; }
        .btn-sm { padding: 5px 10px; font-size: 0.75rem; }
        .btn-primary { background: linear-gradient(135deg,#6c63ff,#3b82f6); color:#fff; box-shadow: 0 2px 10px rgba(108,99,255,0.25); }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-danger { background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); }
        .btn-danger:hover { background: rgba(239,68,68,0.25); }
        .btn-secondary { background: rgba(255,255,255,0.06); color: var(--text2); border: 1px solid var(--border2); }
        .btn-secondary:hover { background: rgba(255,255,255,0.1); color: var(--text); }
        .btn-warning { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3); }
        .btn-warning:hover { background: rgba(245,158,11,0.25); }

        /* ── Form inline ── */
        .form-inline { display: flex; gap: 10px; align-items: flex-end; flex-wrap: wrap; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text3); }
        .form-input {
            background: rgba(255,255,255,0.04);
            border: 1px solid var(--border2);
            border-radius: 8px;
            padding: 8px 12px;
            color: var(--text);
            font-family: inherit; font-size: 0.85rem;
            outline: none;
            transition: border-color 0.2s;
        }
        .form-input:focus { border-color: rgba(108,99,255,0.5); }
        .form-input::placeholder { color: var(--text3); }

        /* ── Pagination ── */
        .pagination { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
        .page-link {
            padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 500;
            background: rgba(255,255,255,0.04); border: 1px solid var(--border);
            color: var(--text2); text-decoration: none; transition: all 0.2s;
        }
        .page-link:hover { background: rgba(108,99,255,0.15); border-color: rgba(108,99,255,0.3); color: #a78bfa; }
        .page-link.active { background: linear-gradient(135deg,#6c63ff,#3b82f6); border-color: transparent; color: #fff; }
        .page-info { font-size: 0.78rem; color: var(--text3); margin-left: 8px; }

        /* ── Edit reason modal ── */
        .modal-overlay { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.7); z-index:999; align-items:center; justify-content:center; backdrop-filter:blur(4px); }
        .modal-overlay.open { display:flex; }
        .modal-box { background: #0f172a; border:1px solid var(--border2); border-radius:16px; padding:2rem; max-width:440px; width:90%; animation:pop-in 0.2s ease; }
        @keyframes pop-in { from{opacity:0;transform:scale(0.95);} to{opacity:1;transform:scale(1);} }
        .modal-title { font-size:1rem; font-weight:700; margin-bottom:1.2rem; }
        .modal-footer { display:flex; gap:10px; justify-content:flex-end; margin-top:1.2rem; }

        /* ── Live search JS highlight ── */
        mark { background: rgba(108,99,255,0.3); color: #c4b5fd; border-radius: 3px; padding: 0 2px; }

        /* ── Blacklist row highlight ── */
        .bl-row { background: rgba(239,68,68,0.04); }
        .bl-row:hover td { background: rgba(239,68,68,0.07) !important; }

        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }

        /* ── Empty state ── */
        .empty-state { text-align:center; padding: 3rem; color: var(--text3); }
        .empty-state i { font-size: 2rem; margin-bottom: 1rem; opacity:0.4; }
    </style>
</head>
<body>

<!-- ══ TOP NAV ══ -->
<nav class="topbar">
    <div class="topbar-left">
        <div class="topbar-logo">🛡️ WAF Monitor</div>
        <span class="topbar-badge">ADMIN PANEL</span>
    </div>
    <div class="topbar-right">
        <div class="admin-pill">
            <span class="dot"></span>
            <span>sabda26</span>
        </div>
        <span style="color:var(--text3);font-family:monospace;font-size:0.78rem;"><?= htmlspecialchars($clientIP) ?></span>
        <a href="logout.php" class="btn-logout">Sign Out</a>
    </div>
</nav>

<!-- ══ MAIN ══ -->
<main class="main">

<?php if ($msg): ?>
<div class="alert alert-<?= $msgType ?>"><?= $msg ?></div>
<?php endif; ?>

<!-- ── Stats Cards ── -->
<div class="stats-grid">
    <div class="stat-card" style="--card-accent:linear-gradient(90deg,#6c63ff,#3b82f6);">
        <div class="label">Total Logs</div>
        <div class="value"><?= number_format($stats['total_logs'] ?? 0) ?></div>
        <div class="sub">All time records</div>
        <i class="fa-solid fa-database stat-icon"></i>
    </div>
    <div class="stat-card" style="--card-accent:linear-gradient(90deg,#ef4444,#dc2626);">
        <div class="label">Failed Attempts</div>
        <div class="value" style="color:#f87171;"><?= number_format($stats['failed_count'] ?? 0) ?></div>
        <div class="sub">Login failures</div>
        <i class="fa-solid fa-triangle-exclamation stat-icon"></i>
    </div>
    <div class="stat-card" style="--card-accent:linear-gradient(90deg,#f59e0b,#d97706);">
        <div class="label">Blocked Access</div>
        <div class="value" style="color:#fbbf24;"><?= number_format($stats['blocked_count'] ?? 0) ?></div>
        <div class="sub">Gatekeeper stops</div>
        <i class="fa-solid fa-ban stat-icon"></i>
    </div>
    <div class="stat-card" style="--card-accent:linear-gradient(90deg,#22c55e,#16a34a);">
        <div class="label">Unique IPs</div>
        <div class="value" style="color:#4ade80;"><?= number_format($stats['unique_ips'] ?? 0) ?></div>
        <div class="sub">Distinct sources</div>
        <i class="fa-solid fa-network-wired stat-icon"></i>
    </div>
    <div class="stat-card" style="--card-accent:linear-gradient(90deg,#8b5cf6,#7c3aed);">
        <div class="label">Blacklisted IPs</div>
        <div class="value" style="color:#a78bfa;"><?= number_format($blacklistCount) ?></div>
        <div class="sub">Currently blocked</div>
        <i class="fa-solid fa-shield-halved stat-icon"></i>
    </div>
</div>

<!-- ══ SECTION: Block IP form ══ -->
<div class="card">
    <div class="card-header">
        <div class="section-title"><span class="icon">🔨</span> Manual IP Block</div>
    </div>
    <div class="card-body">
        <form method="POST">
            <input type="hidden" name="action" value="block_ip">
            <div class="form-inline">
                <div class="form-group">
                    <label>IP Address</label>
                    <input type="text" name="ip_address" class="form-input" placeholder="e.g. 192.168.1.100" required style="width:220px;" pattern="^(\d{1,3}\.){3}\d{1,3}$|^[0-9a-fA-F:]+$">
                </div>
                <div class="form-group" style="flex:1;min-width:240px;">
                    <label>Block Reason</label>
                    <input type="text" name="reason" class="form-input" placeholder="e.g. Suspicious port scanning activity" value="Manually blocked by administrator">
                </div>
                <button type="submit" class="btn btn-danger" style="height:38px;"><i class="fa-solid fa-ban"></i> Block IP</button>
            </div>
        </form>
    </div>
</div>

<!-- ══ SECTION: Two columns — Blacklist + Top IPs ══ -->
<div class="two-col">

    <!-- IP Blacklist -->
    <div class="card">
        <div class="card-header">
            <div class="section-title">
                <span class="icon">🚫</span> IP Blacklist
                <span class="count"><?= $blacklistCount ?></span>
            </div>
            <form method="GET" style="display:inline-block;">
                <div class="search-box">
                    <i class="fa-solid fa-search"></i>
                    <input type="text" name="bq" placeholder="Search blacklist..." value="<?= htmlspecialchars($blackSearch) ?>" onkeydown="if(event.key==='Enter')this.form.submit()">
                    <?php if ($search): ?><input type="hidden" name="q" value="<?= htmlspecialchars($search) ?>"><?php endif; ?>
                </div>
            </form>
        </div>
        <div class="table-wrap">
            <?php if ($blacklistResult && $blacklistResult->num_rows > 0): ?>
            <table>
                <thead>
                    <tr>
                        <th>IP Address</th>
                        <th>Reason</th>
                        <th>Blocked By</th>
                        <th>When</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                <?php while ($bl = $blacklistResult->fetch_assoc()): ?>
                <tr class="bl-row">
                    <td class="mono"><?= htmlspecialchars($bl['ip_address']) ?></td>
                    <td style="font-size:0.8rem;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="<?= htmlspecialchars($bl['reason']) ?>">
                        <?= htmlspecialchars($bl['reason']) ?>
                    </td>
                    <td style="font-size:0.78rem;color:var(--text3);"><?= htmlspecialchars($bl['blocked_by']) ?></td>
                    <td class="time-text"><?= timeAgo($bl['blocked_at']) ?></td>
                    <td>
                        <div style="display:flex;gap:6px;flex-wrap:wrap;">
                            <!-- Edit reason -->
                            <button class="btn btn-warning btn-sm" onclick="openEditModal(<?= $bl['id'] ?>, '<?= addslashes(htmlspecialchars($bl['reason'])) ?>')">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                            <!-- Unblock -->
                            <form method="POST" onsubmit="return confirm('Unblock <?= htmlspecialchars($bl['ip_address']) ?>?');">
                                <input type="hidden" name="action" value="unblock_ip">
                                <input type="hidden" name="bl_id" value="<?= $bl['id'] ?>">
                                <button type="submit" class="btn btn-danger btn-sm"><i class="fa-solid fa-lock-open"></i> Unblock</button>
                            </form>
                        </div>
                    </td>
                </tr>
                <?php endwhile; ?>
                </tbody>
            </table>
            <?php else: ?>
            <div class="empty-state">
                <i class="fa-solid fa-shield-halved"></i>
                <p>No blacklisted IPs<?= $blackSearch ? " matching \"$blackSearch\"" : "" ?>.</p>
            </div>
            <?php endif; ?>
        </div>
    </div>

    <!-- Top 10 Failing IPs -->
    <div class="card">
        <div class="card-header">
            <div class="section-title"><span class="icon">🔥</span> Top Offender IPs</div>
        </div>
        <div class="table-wrap">
            <?php
            $topIPs = $db->query("
                SELECT ip_address,
                       COUNT(*) AS total,
                       SUM(status='failed') AS fails,
                       MAX(created_at) AS last_seen,
                       (SELECT COUNT(*) FROM ip_blacklist WHERE ip_address = a.ip_address) AS is_blocked
                FROM access_logs a
                GROUP BY ip_address
                ORDER BY fails DESC, total DESC
                LIMIT 10
            ");
            ?>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>IP</th>
                        <th>Total</th>
                        <th>Fails</th>
                        <th>Last Seen</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                <?php $rank = 1; while ($row = $topIPs->fetch_assoc()): ?>
                <tr>
                    <td style="color:var(--text3);font-size:0.8rem;"><?= $rank++ ?></td>
                    <td class="mono"><?= htmlspecialchars($row['ip_address']) ?></td>
                    <td style="font-weight:600;"><?= $row['total'] ?></td>
                    <td style="color:#f87171;font-weight:600;"><?= $row['fails'] ?></td>
                    <td class="time-text"><?= timeAgo($row['last_seen']) ?></td>
                    <td>
                        <?php if ($row['is_blocked']): ?>
                            <span style="color:#f87171;font-size:0.75rem;font-weight:600;">🚫 BLOCKED</span>
                        <?php elseif ($row['fails'] >= 5): ?>
                            <span style="color:#fbbf24;font-size:0.75rem;font-weight:600;">⚠️ RISK</span>
                        <?php else: ?>
                            <span style="color:var(--text3);font-size:0.75rem;">—</span>
                        <?php endif; ?>
                    </td>
                </tr>
                <?php endwhile; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- ══ SECTION: Access Logs Full Table ══ -->
<div class="card">
    <div class="card-header">
        <div class="section-title">
            <span class="icon">📋</span> Access Logs
            <span class="count"><?= number_format($totalRows) ?> records</span>
        </div>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
            <!-- Live search (client-side + server-side) -->
            <form method="GET" id="search-form">
                <div class="search-box">
                    <i class="fa-solid fa-search"></i>
                    <input type="text" name="q" id="search-input" placeholder="Search by IP, user, action, status..."
                           value="<?= htmlspecialchars($search) ?>"
                           onkeydown="if(event.key==='Enter')this.form.submit()">
                    <?php if ($blackSearch): ?><input type="hidden" name="bq" value="<?= htmlspecialchars($blackSearch) ?>"><?php endif; ?>
                </div>
            </form>
            <?php if ($search): ?>
            <a href="admin.php" class="btn btn-secondary btn-sm"><i class="fa-solid fa-xmark"></i> Clear</a>
            <?php endif; ?>
        </div>
    </div>
    <div class="table-wrap">
        <?php if ($logsResult && $logsResult->num_rows > 0): ?>
        <table id="logs-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>IP Address</th>
                    <th>Username</th>
                    <th>Action</th>
                    <th>Status</th>
                    <th>User Agent</th>
                    <th>Time</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            <?php while ($log = $logsResult->fetch_assoc()): ?>
            <tr>
                <td style="color:var(--text3);font-size:0.78rem;"><?= $log['id'] ?></td>
                <td class="mono"><?= htmlspecialchars($log['ip_address']) ?></td>
                <td style="font-size:0.82rem;color:var(--text2);"><?= $log['username'] ? htmlspecialchars($log['username']) : '<span style="color:var(--text3)">—</span>' ?></td>
                <td><?= actionBadge($log['action']) ?></td>
                <td><?= statusBadge($log['status']) ?></td>
                <td><div class="ua-text" title="<?= htmlspecialchars($log['user_agent'] ?? '') ?>"><?= htmlspecialchars(substr($log['user_agent'] ?? '—', 0, 50)) ?></div></td>
                <td>
                    <div class="time-text"><?= date('Y-m-d H:i:s', strtotime($log['created_at'])) ?></div>
                    <div class="time-text"><?= timeAgo($log['created_at']) ?></div>
                </td>
                <td>
                    <div style="display:flex;gap:6px;">
                        <!-- Quick block IP from log -->
                        <form method="POST" onsubmit="return confirm('Block IP <?= htmlspecialchars($log['ip_address']) ?>?');">
                            <input type="hidden" name="action" value="block_ip">
                            <input type="hidden" name="ip_address" value="<?= htmlspecialchars($log['ip_address']) ?>">
                            <input type="hidden" name="reason" value="Blocked from access log #<?= $log['id'] ?>">
                            <button type="submit" class="btn btn-warning btn-sm" title="Block this IP"><i class="fa-solid fa-ban"></i></button>
                        </form>
                        <!-- Delete log entry -->
                        <form method="POST" onsubmit="return confirm('Delete log #<?= $log['id'] ?>?');">
                            <input type="hidden" name="action" value="delete_log">
                            <input type="hidden" name="log_id" value="<?= $log['id'] ?>">
                            <button type="submit" class="btn btn-danger btn-sm" title="Delete log"><i class="fa-solid fa-trash"></i></button>
                        </form>
                    </div>
                </td>
            </tr>
            <?php endwhile; ?>
            </tbody>
        </table>
        <?php else: ?>
        <div class="empty-state">
            <i class="fa-solid fa-folder-open"></i>
            <p>No logs found<?= $search ? " for \"".htmlspecialchars($search)."\"" : "" ?>.</p>
        </div>
        <?php endif; ?>
    </div>

    <!-- Pagination -->
    <?php if ($totalPages > 1): ?>
    <div style="padding:14px 20px;border-top:1px solid var(--border);display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <div class="pagination">
            <?php if ($page > 1): ?>
            <a href="?p=<?= $page-1 ?>&q=<?= urlencode($search) ?>" class="page-link">← Prev</a>
            <?php endif; ?>
            <?php for ($i = max(1,$page-2); $i <= min($totalPages,$page+2); $i++): ?>
            <a href="?p=<?= $i ?>&q=<?= urlencode($search) ?>" class="page-link <?= $i===$page ? 'active' : '' ?>"><?= $i ?></a>
            <?php endfor; ?>
            <?php if ($page < $totalPages): ?>
            <a href="?p=<?= $page+1 ?>&q=<?= urlencode($search) ?>" class="page-link">Next →</a>
            <?php endif; ?>
        </div>
        <span class="page-info">Page <?= $page ?> of <?= $totalPages ?> (<?= number_format($totalRows) ?> records)</span>
    </div>
    <?php endif; ?>
</div>

</main>

<!-- ══ Edit Reason Modal ══ -->
<div class="modal-overlay" id="edit-modal">
    <div class="modal-box">
        <div class="modal-title">✏️ Update Block Reason</div>
        <form method="POST">
            <input type="hidden" name="action" value="update_reason">
            <input type="hidden" name="bl_id" id="edit-bl-id">
            <div class="form-group" style="margin-bottom:1rem;">
                <label>New Reason</label>
                <input type="text" name="new_reason" id="edit-reason-input" class="form-input" style="width:100%;" required>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeEditModal()">Cancel</button>
                <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
        </form>
    </div>
</div>

<script>
// ── Edit modal ──
function openEditModal(id, reason) {
    document.getElementById('edit-bl-id').value = id;
    document.getElementById('edit-reason-input').value = reason;
    document.getElementById('edit-modal').classList.add('open');
}
function closeEditModal() {
    document.getElementById('edit-modal').classList.remove('open');
}
document.getElementById('edit-modal').addEventListener('click', function(e) {
    if (e.target === this) closeEditModal();
});

// ── Live client-side search highlight ──
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        const q = this.value.toLowerCase().trim();
        const rows = document.querySelectorAll('#logs-table tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = (!q || text.includes(q)) ? '' : 'none';
        });
    });
}

// ── Auto-dismiss alert ──
setTimeout(() => {
    const alert = document.querySelector('.alert');
    if (alert) { alert.style.opacity='0'; alert.style.transform='translateY(-8px)'; alert.style.transition='all 0.4s'; setTimeout(()=>alert.remove(), 400); }
}, 4000);
</script>
</body>
</html>
