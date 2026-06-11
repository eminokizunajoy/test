<?php
// ============================================================
// blacklist.php — Feature: View, Block, Update, Unblock IPs
// ============================================================
require_once __DIR__ . '/gatekeeper.php';
requireAdmin();

$pageTitle  = 'IP Blacklist';
$activePage = 'blacklist';
$db         = getDB();

// Search
$search = trim($_GET['q'] ?? '');
$where  = '';
if ($search !== '') {
    $s     = $db->real_escape_string($search);
    $where = "WHERE ip_address LIKE '%$s%' OR reason LIKE '%$s%' OR blocked_by LIKE '%$s%'";
}

$total     = (int)$db->query("SELECT COUNT(*) AS n FROM ip_blacklist $where")->fetch_assoc()['n'];
$blacklist = $db->query("SELECT * FROM ip_blacklist $where ORDER BY blocked_at DESC");

// Top offender IPs (for quick-block suggestions)
$topOffenders = $db->query("
    SELECT a.ip_address,
           COUNT(*) AS total,
           SUM(a.status='failed') AS fails,
           MAX(a.created_at) AS last_seen,
           (SELECT COUNT(*) FROM ip_blacklist b WHERE b.ip_address = a.ip_address) AS is_blocked
    FROM access_logs a
    GROUP BY a.ip_address
    HAVING fails > 0
    ORDER BY fails DESC
    LIMIT 10
");

include __DIR__ . '/header.php';
?>

<div class="page-header">
    <h1>🚫 IP Blacklist</h1>
    <p>Manage blocked IP addresses — block, update reason, and unblock</p>
</div>

<div style="display:grid;grid-template-columns:1fr 380px;gap:20px;align-items:start;">

    <!-- Left: Blacklist Table -->
    <div>
        <!-- Search + Add button toolbar -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
            <form method="GET" style="display:flex;gap:8px;align-items:center;">
                <div class="search-wrap">
                    <i class="fa-solid fa-search"></i>
                    <input type="text" name="q" class="search-input"
                           placeholder="Search IP or reason..."
                           value="<?= e($search) ?>">
                </div>
                <button type="submit" class="btn btn-primary btn-sm">Search</button>
                <?php if ($search): ?><a href="blacklist.php" class="btn btn-secondary btn-sm">✕ Clear</a><?php endif; ?>
            </form>
            <button class="btn btn-danger" onclick="openModal('modal-block')">
                <i class="fa-solid fa-ban"></i> Block New IP
            </button>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">🚫 Blocked IPs <span class="card-count"><?= $total ?></span></div>
            </div>
            <div class="table-wrap">
                <?php if ($blacklist && $blacklist->num_rows > 0): ?>
                <table>
                    <thead>
                        <tr>
                            <th>IP Address</th>
                            <th>Reason</th>
                            <th>Blocked By</th>
                            <th>Blocked At</th>
                            <th>Log Count</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php while ($bl = $blacklist->fetch_assoc()):
                        // Count related logs (One-to-Many)
                        $cntStmt = $db->prepare("SELECT COUNT(*) AS n FROM access_logs WHERE ip_address=?");
                        $cntStmt->bind_param('s', $bl['ip_address']);
                        $cntStmt->execute();
                        $logCount = $cntStmt->get_result()->fetch_assoc()['n'];
                        $cntStmt->close();
                    ?>
                    <tr style="background:rgba(239,68,68,.03);">
                        <td class="mono"><?= e($bl['ip_address']) ?></td>
                        <td>
                            <span style="font-size:.8rem;max-width:220px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                                  title="<?= e($bl['reason']) ?>">
                                <?= e($bl['reason']) ?>
                            </span>
                        </td>
                        <td class="text-muted"><?= e($bl['blocked_by']) ?></td>
                        <td>
                            <div class="nowrap text-muted" style="font-size:.75rem;"><?= date('Y-m-d H:i', strtotime($bl['blocked_at'])) ?></div>
                            <div class="text-muted" style="font-size:.7rem;"><?= timeAgo($bl['blocked_at']) ?></div>
                        </td>
                        <td>
                            <a href="logs.php?q=<?= urlencode($bl['ip_address']) ?>" class="btn btn-ghost btn-xs">
                                <?= $logCount ?> logs
                            </a>
                        </td>
                        <td>
                            <div style="display:flex;gap:5px;">
                                <!-- Edit reason -->
                                <button class="btn btn-warning btn-xs"
                                        onclick="openEditModal(<?= $bl['id'] ?>, '<?= addslashes(e($bl['reason'])) ?>')">
                                    <i class="fa-solid fa-pen"></i>
                                </button>
                                <!-- Unblock -->
                                <form method="POST" action="actions/unblock_ip.php"
                                      onsubmit="return confirmAction('Unblock <?= e($bl['ip_address']) ?>?')">
                                    <?= csrfInput() ?>
                                    <input type="hidden" name="bl_id" value="<?= $bl['id'] ?>">
                                    <input type="hidden" name="redirect" value="blacklist.php?q=<?= urlencode($search) ?>">
                                    <button type="submit" class="btn btn-danger btn-xs">
                                        <i class="fa-solid fa-lock-open"></i> Unblock
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
                    <i class="fa-solid fa-shield-halved"></i>
                    <p>No blocked IPs<?= $search ? ' matching "'.e($search).'"' : '' ?>.</p>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>

    <!-- Right: Top Offenders panel -->
    <div class="card">
        <div class="card-header">
            <div class="card-title">🔥 Top Offenders</div>
        </div>
        <div class="table-wrap">
            <?php if ($topOffenders && $topOffenders->num_rows > 0): ?>
            <table>
                <thead><tr><th>IP</th><th>Fails</th><th>Status</th></tr></thead>
                <tbody>
                <?php $rank=1; while ($off = $topOffenders->fetch_assoc()): ?>
                <tr>
                    <td>
                        <div class="mono" style="font-size:.78rem;"><?= e($off['ip_address']) ?></div>
                        <div class="text-muted" style="font-size:.68rem;"><?= timeAgo($off['last_seen']) ?></div>
                    </td>
                    <td style="color:#f87171;font-weight:700;"><?= $off['fails'] ?></td>
                    <td>
                        <?php if ($off['is_blocked']): ?>
                            <span style="color:#f87171;font-size:.7rem;font-weight:700;">🚫 BLOCKED</span>
                        <?php elseif ($off['fails'] >= 5): ?>
                            <!-- Quick block from offender list -->
                            <form method="POST" action="actions/block_ip.php">
                                <?= csrfInput() ?>
                                <input type="hidden" name="ip_address" value="<?= e($off['ip_address']) ?>">
                                <input type="hidden" name="reason" value="High failed attempt count (<?= $off['fails'] ?> fails)">
                                <input type="hidden" name="redirect" value="blacklist.php">
                                <button type="submit" class="btn btn-danger btn-xs">Block</button>
                            </form>
                        <?php else: ?>
                            <span style="color:#f59e0b;font-size:.7rem;">⚠️ Risk</span>
                        <?php endif; ?>
                    </td>
                </tr>
                <?php $rank++; endwhile; ?>
                </tbody>
            </table>
            <?php else: ?>
            <div class="empty-state" style="padding:2rem;"><i class="fa-solid fa-check"></i><p>No offenders</p></div>
            <?php endif; ?>
        </div>
    </div>

</div>

<!-- Modal: Block New IP -->
<div class="modal-bg" id="modal-block">
    <div class="modal-box">
        <div class="modal-title">🔨 Block IP Address</div>
        <form method="POST" action="actions/block_ip.php">
            <?= csrfInput() ?>
            <input type="hidden" name="redirect" value="blacklist.php">
            <div class="form-group" style="margin-bottom:1rem;">
                <label class="form-label">IP Address</label>
                <input type="text" name="ip_address" class="form-input" style="width:100%;"
                       placeholder="e.g. 192.168.1.100" required>
            </div>
            <div class="form-group" style="margin-bottom:1rem;">
                <label class="form-label">Reason</label>
                <input type="text" name="reason" class="form-input" style="width:100%;"
                       placeholder="Reason for blocking"
                       value="Manually blocked by administrator">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModal('modal-block')">Cancel</button>
                <button type="submit" class="btn btn-danger"><i class="fa-solid fa-ban"></i> Block IP</button>
            </div>
        </form>
    </div>
</div>

<!-- Modal: Edit Reason -->
<div class="modal-bg" id="modal-edit">
    <div class="modal-box">
        <div class="modal-title">✏️ Update Block Reason</div>
        <form method="POST" action="actions/update_reason.php">
            <?= csrfInput() ?>
            <input type="hidden" name="redirect" value="blacklist.php?q=<?= urlencode($search) ?>">
            <input type="hidden" name="bl_id" id="edit-id">
            <div class="form-group" style="margin-bottom:1rem;">
                <label class="form-label">New Reason</label>
                <input type="text" name="new_reason" id="edit-reason" class="form-input" style="width:100%;" required>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModal('modal-edit')">Cancel</button>
                <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
        </form>
    </div>
</div>

<script>
function openEditModal(id, reason) {
    document.getElementById('edit-id').value     = id;
    document.getElementById('edit-reason').value = reason;
    openModal('modal-edit');
}
</script>

<?php include __DIR__ . '/footer.php'; ?>
