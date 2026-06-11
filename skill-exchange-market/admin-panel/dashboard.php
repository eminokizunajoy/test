<?php
// ============================================================
// dashboard.php — Stats Overview (main landing page)
// ============================================================
require_once __DIR__ . '/gatekeeper.php';
requireAdmin();

$pageTitle  = 'Dashboard';
$activePage = 'dashboard';
$stats      = getDashboardStats();
$db         = getDB();

// Recent 5 logs
$recentLogs = $db->query("SELECT * FROM access_logs ORDER BY created_at DESC LIMIT 5");

// Recent 5 blacklisted
$recentBL = $db->query("SELECT * FROM ip_blacklist ORDER BY blocked_at DESC LIMIT 5");

// Hourly activity (last 24h)
$hourly = $db->query("
    SELECT DATE_FORMAT(created_at,'%H:00') AS hour,
           COUNT(*) AS total,
           SUM(status='failed') AS fails
    FROM access_logs
    WHERE created_at > NOW() - INTERVAL 24 HOUR
    GROUP BY DATE_FORMAT(created_at,'%Y-%m-%d %H')
    ORDER BY created_at ASC
    LIMIT 24
");
$chartLabels = $chartTotal = $chartFails = [];
while ($r = $hourly->fetch_assoc()) {
    $chartLabels[] = $r['hour'];
    $chartTotal[]  = (int)$r['total'];
    $chartFails[]  = (int)$r['fails'];
}

include __DIR__ . '/header.php';
?>

<div class="page-header">
    <h1>📊 Dashboard</h1>
    <p>Overview of all monitored activity · Last updated <?= date('Y-m-d H:i:s') ?></p>
</div>

<!-- Stats Cards -->
<div class="stats-grid">
    <div class="stat-card" style="--line-color:linear-gradient(135deg,#6c63ff,#3b82f6);">
        <div class="stat-card-cover">
            <i class="fa-solid fa-database"></i>
        </div>
        <div class="stat-card-body">
            <div class="stat-label">Total Logs</div>
            <div class="stat-value"><?= number_format($stats['total_logs']) ?></div>
            <div class="stat-sub">All-time records</div>
        </div>
    </div>
    <div class="stat-card" style="--line-color:linear-gradient(135deg,#ef4444,#dc2626);">
        <div class="stat-card-cover">
            <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div class="stat-card-body">
            <div class="stat-label">Failed Attempts</div>
            <div class="stat-value" style="color: #ff3b30;"><?= number_format($stats['failed_count']) ?></div>
            <div class="stat-sub">Login failures</div>
        </div>
    </div>
    <div class="stat-card" style="--line-color:linear-gradient(135deg,#f59e0b,#d97706);">
        <div class="stat-card-cover">
            <i class="fa-solid fa-ban"></i>
        </div>
        <div class="stat-card-body">
            <div class="stat-label">Blocked Hits</div>
            <div class="stat-value" style="color: #ff9500;"><?= number_format($stats['blocked_count']) ?></div>
            <div class="stat-sub">Gatekeeper stops</div>
        </div>
    </div>
    <div class="stat-card" style="--line-color:linear-gradient(135deg,#22c55e,#16a34a);">
        <div class="stat-card-cover">
            <i class="fa-solid fa-network-wired"></i>
        </div>
        <div class="stat-card-body">
            <div class="stat-label">Unique IPs</div>
            <div class="stat-value" style="color: #34c759;"><?= number_format($stats['unique_ips']) ?></div>
            <div class="stat-sub">Distinct sources</div>
        </div>
    </div>
    <div class="stat-card" style="--line-color:linear-gradient(135deg,#8b5cf6,#7c3aed);">
        <div class="stat-card-cover">
            <i class="fa-solid fa-shield-halved"></i>
        </div>
        <div class="stat-card-body">
            <div class="stat-label">Blacklisted IPs</div>
            <div class="stat-value" style="color: #8b5cf6;"><?= number_format($stats['blacklist_count']) ?></div>
            <div class="stat-sub">Currently blocked</div>
        </div>
    </div>
</div>

<!-- Chart + Recent Blacklist -->
<div style="display:grid;grid-template-columns:1.6fr 1fr;gap:20px;margin-bottom:22px;">

    <!-- Activity Chart -->
    <div class="card">
        <div class="card-header">
            <div class="card-title">📈 Activity (Last 24h)</div>
        </div>
        <div class="card-body" style="height:200px;position:relative;">
            <?php if (empty($chartLabels)): ?>
                <div class="empty-state" style="padding:2rem;"><i class="fa-solid fa-chart-line"></i><p>No activity yet</p></div>
            <?php else: ?>
            <canvas id="actChart" style="width:100%;height:180px;"></canvas>
            <?php endif; ?>
        </div>
    </div>

    <!-- Recent Blacklisted -->
    <div class="card">
        <div class="card-header">
            <div class="card-title">🚫 Recently Blocked</div>
            <a href="<?= BASE_URL ?>/blacklist.php" class="btn btn-ghost btn-sm">View All →</a>
        </div>
        <div class="table-wrap">
            <?php if ($recentBL && $recentBL->num_rows > 0): ?>
            <table>
                <thead><tr><th>IP</th><th>When</th></tr></thead>
                <tbody>
                <?php while ($bl = $recentBL->fetch_assoc()): ?>
                <tr>
                    <td class="mono"><?= e($bl['ip_address']) ?></td>
                    <td class="text-muted nowrap"><?= timeAgo($bl['blocked_at']) ?></td>
                </tr>
                <?php endwhile; ?>
                </tbody>
            </table>
            <?php else: ?>
            <div class="empty-state" style="padding:2rem;"><i class="fa-solid fa-check-circle"></i><p>No blocked IPs</p></div>
            <?php endif; ?>
        </div>
    </div>
</div>

<!-- Recent Logs -->
<div class="card">
    <div class="card-header">
        <div class="card-title">📋 Recent Access Logs</div>
        <a href="<?= BASE_URL ?>/logs.php" class="btn btn-ghost btn-sm">View All →</a>
    </div>
    <div class="table-wrap">
        <?php if ($recentLogs && $recentLogs->num_rows > 0): ?>
        <table>
            <thead>
                <tr><th>IP</th><th>User</th><th>Action</th><th>Status</th><th>Time</th></tr>
            </thead>
            <tbody>
            <?php while ($log = $recentLogs->fetch_assoc()): ?>
            <tr>
                <td class="mono"><?= e($log['ip_address']) ?></td>
                <td class="text-muted"><?= $log['username'] ? e($log['username']) : '—' ?></td>
                <td><?= actionBadge($log['action']) ?></td>
                <td><?= statusBadge($log['status']) ?></td>
                <td class="text-muted nowrap"><?= timeAgo($log['created_at']) ?></td>
            </tr>
            <?php endwhile; ?>
            </tbody>
        </table>
        <?php else: ?>
        <div class="empty-state"><i class="fa-solid fa-folder-open"></i><p>No logs recorded yet</p></div>
        <?php endif; ?>
    </div>
</div>

<?php if (!empty($chartLabels)): ?>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>
<script>
new Chart(document.getElementById('actChart'), {
    type: 'line',
    data: {
        labels: <?= json_encode($chartLabels) ?>,
        datasets: [
            { label:'Total',  data: <?= json_encode($chartTotal) ?>,  borderColor:'#6c63ff', backgroundColor:'rgba(108,99,255,.08)', tension:.4, fill:true, pointRadius:3 },
            { label:'Failed', data: <?= json_encode($chartFails) ?>,  borderColor:'#ef4444', backgroundColor:'rgba(239,68,68,.07)', tension:.4, fill:true, pointRadius:3 }
        ]
    },
    options: {
        responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{ labels:{ color:'#94a3b8', font:{size:11} } } },
        scales:{
            x:{ ticks:{ color:'#475569',font:{size:10} }, grid:{ color:'rgba(255,255,255,.04)' } },
            y:{ ticks:{ color:'#475569',font:{size:10} }, grid:{ color:'rgba(255,255,255,.04)' }, beginAtZero:true }
        }
    }
});
</script>
<?php endif; ?>

<?php include __DIR__ . '/footer.php'; ?>
