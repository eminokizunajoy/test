<?php
// ============================================================
// logs.php — Feature: View, Search, and Delete Access Logs
// ============================================================
require_once __DIR__ . '/gatekeeper.php';
requireAdmin();

$pageTitle  = 'Access Logs';
$activePage = 'logs';
$db         = getDB();

// ── Pagination + Search ──
$search       = trim($_GET['q'] ?? '');
$statusFilter = trim($_GET['status'] ?? '');
$page         = max(1, (int)($_GET['p'] ?? 1));
$limit        = 25;
$offset       = ($page - 1) * $limit;

$where = [];
if ($search !== '') {
    $s = $db->real_escape_string($search);
    $where[] = "(ip_address LIKE '%$s%' OR username LIKE '%$s%' OR action LIKE '%$s%' OR status LIKE '%$s%' OR user_agent LIKE '%$s%')";
}
if ($statusFilter !== '') {
    $st = $db->real_escape_string($statusFilter);
    $where[] = "status = '$st'";
}

$whereClause = count($where) > 0 ? 'WHERE ' . implode(' AND ', $where) : '';

$totalRows  = (int)$db->query("SELECT COUNT(*) AS n FROM access_logs $whereClause")->fetch_assoc()['n'];
$totalPages = max(1, ceil($totalRows / $limit));
$logs       = $db->query("SELECT * FROM access_logs $whereClause ORDER BY created_at DESC LIMIT $limit OFFSET $offset");

include __DIR__ . '/header.php';
?>

<div class="page-header">
    <h1>📋 Access Logs</h1>
    <p>Every page visit and login attempt recorded by the system</p>
</div>

<!-- Toolbar -->
<div style="display:flex;flex-direction:column;gap:16px;margin-bottom:24px;">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <form method="GET" style="display:flex;gap:8px;align-items:center;">
            <?php if ($statusFilter): ?>
            <input type="hidden" name="status" value="<?= e($statusFilter) ?>">
            <?php endif; ?>
            <div class="search-wrap">
                <i class="fa-solid fa-search"></i>
                <input type="text" name="q" class="search-input" id="live-search"
                       placeholder="Search by IP, user, action, status..."
                       value="<?= e($search) ?>">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Search</button>
            <?php if ($search || $statusFilter): ?>
            <a href="logs.php" class="btn btn-secondary btn-sm">✕ Clear All</a>
            <?php endif; ?>
        </form>
        <span class="text-muted" style="font-weight: 600; font-size: 0.82rem;"><?= number_format($totalRows) ?> records found</span>
    </div>

    <!-- Behance-style Filter Pills -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;border-bottom: 1px solid var(--border);padding-bottom:12px;">
        <a href="logs.php?q=<?= urlencode($search) ?>" class="btn <?= $statusFilter==='' ? 'btn-primary' : 'btn-secondary' ?> btn-sm">All Logs</a>
        <a href="logs.php?q=<?= urlencode($search) ?>&status=failed" class="btn <?= $statusFilter==='failed' ? 'btn-primary' : 'btn-secondary' ?> btn-sm">Failed</a>
        <a href="logs.php?q=<?= urlencode($search) ?>&status=blocked" class="btn <?= $statusFilter==='blocked' ? 'btn-primary' : 'btn-secondary' ?> btn-sm">Blocked</a>
        <a href="logs.php?q=<?= urlencode($search) ?>&status=success" class="btn <?= $statusFilter==='success' ? 'btn-primary' : 'btn-secondary' ?> btn-sm">Success</a>
    </div>
</div>

<!-- Logs Table -->
<div class="card">
    <div class="table-wrap">
        <?php if ($logs && $logs->num_rows > 0): ?>
        <table id="logs-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>IP Address</th>
                    <th>Username</th>
                    <th>Action</th>
                    <th>Status</th>
                    <th>User Agent</th>
                    <th>Timestamp</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            <?php while ($log = $logs->fetch_assoc()): ?>
            <tr id="log-<?= $log['id'] ?>">
                <td class="text-muted">#<?= $log['id'] ?></td>
                <td class="mono"><?= e($log['ip_address']) ?></td>
                <td><?= $log['username'] ? e($log['username']) : '<span class="text-muted">—</span>' ?></td>
                <td><?= actionBadge($log['action']) ?></td>
                <td><?= statusBadge($log['status']) ?></td>
                <td>
                    <span style="font-size:.74rem;color:var(--text3);max-width:220px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                          title="<?= e($log['user_agent'] ?? '') ?>">
                        <?= e(substr($log['user_agent'] ?? '—', 0, 60)) ?>
                    </span>
                </td>
                <td>
                    <div class="nowrap text-muted" style="font-size:.75rem;"><?= date('Y-m-d H:i:s', strtotime($log['created_at'])) ?></div>
                    <div class="text-muted" style="font-size:.7rem;"><?= timeAgo($log['created_at']) ?></div>
                </td>
                <td>
                    <div style="display:flex;gap:5px;">
                        <!-- Quick block IP -->
                        <form method="POST" action="actions/block_ip.php"
                              onsubmit="return confirmAction('Block IP <?= e($log['ip_address']) ?>?')">
                            <?= csrfInput() ?>
                            <input type="hidden" name="ip_address" value="<?= e($log['ip_address']) ?>">
                            <input type="hidden" name="reason" value="Blocked from log #<?= $log['id'] ?>">
                            <input type="hidden" name="redirect" value="logs.php?q=<?= urlencode($search) ?>&p=<?= $page ?>">
                            <button type="submit" class="btn btn-warning btn-xs" title="Block IP">
                                <i class="fa-solid fa-ban"></i>
                            </button>
                        </form>
                        <!-- Delete log -->
                        <form method="POST" action="actions/delete_log.php"
                              onsubmit="return confirmAction('Delete log #<?= $log['id'] ?>?')">
                            <?= csrfInput() ?>
                            <input type="hidden" name="log_id" value="<?= $log['id'] ?>">
                            <input type="hidden" name="redirect" value="logs.php?q=<?= urlencode($search) ?>&p=<?= $page ?>">
                            <button type="submit" class="btn btn-danger btn-xs" title="Delete">
                                <i class="fa-solid fa-trash"></i>
                            </button>
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
            <p>No logs found<?= $search ? ' for "'.e($search).'"' : '' ?>.</p>
        </div>
        <?php endif; ?>
    </div>

    <!-- Pagination -->
    <?php if ($totalPages > 1): ?>
    <div class="pager">
        <?php if ($page > 1): ?>
        <a href="?p=<?= $page-1 ?>&q=<?= urlencode($search) ?>" class="page-btn">← Prev</a>
        <?php endif; ?>
        <?php for ($i = max(1,$page-2); $i <= min($totalPages,$page+2); $i++): ?>
        <a href="?p=<?= $i ?>&q=<?= urlencode($search) ?>" class="page-btn <?= $i===$page?'active':'' ?>"><?= $i ?></a>
        <?php endfor; ?>
        <?php if ($page < $totalPages): ?>
        <a href="?p=<?= $page+1 ?>&q=<?= urlencode($search) ?>" class="page-btn">Next →</a>
        <?php endif; ?>
        <span class="pager-info">Page <?= $page ?> / <?= $totalPages ?></span>
    </div>
    <?php endif; ?>
</div>

<script>
// ── Live client-side filter while typing ──────────────────────
document.getElementById('live-search')?.addEventListener('keyup', function() {
    const q   = this.value.toLowerCase().trim();
    const tbl = document.getElementById('logs-table');
    if (!tbl) return;
    tbl.querySelectorAll('tbody tr').forEach(row => {
        row.style.display = (!q || row.textContent.toLowerCase().includes(q)) ? '' : 'none';
    });
});
</script>

<?php include __DIR__ . '/footer.php'; ?>
