</main>

<script>
// ── Auto-dismiss alert ─────────────────────────────────────────
(function() {
    const alert = document.querySelector('.alert');
    if (alert) setTimeout(() => {
        alert.style.transition = 'opacity .4s,transform .4s';
        alert.style.opacity    = '0';
        alert.style.transform  = 'translateY(-8px)';
        setTimeout(() => alert.remove(), 400);
    }, 4000);
})();

// ── Modal helpers ──────────────────────────────────────────────
function openModal(id)  { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

// Close modal on backdrop click
document.querySelectorAll('.modal-bg').forEach(el => {
    el.addEventListener('click', function(e) {
        if (e.target === this) this.classList.remove('open');
    });
});

// ── Confirm delete helper ──────────────────────────────────────
function confirmAction(msg) { return confirm(msg); }
</script>
</body>
</html>
