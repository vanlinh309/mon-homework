// Page transition helper — used by all pages
function navigateTo(href) {
  document.body.classList.add('page-exit');
  setTimeout(() => { window.location.href = href; }, 220);
}

// Hook .btn-home buttons to use the fade transition
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn-home').forEach(btn => {
    btn.onclick = null;
    btn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      navigateTo('index.html');
    });
  });
});
