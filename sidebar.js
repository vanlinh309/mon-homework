// Shared sidebar toggle — used by all lesson pages
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const isOpen  = sidebar.classList.toggle('open');
  document.getElementById('sidebar-toggle').textContent = isOpen ? '‹' : '›';
}

// Build the HW list items in the sidebar
function renderSidebar(homeworks, currentIdx, onSelect) {
  const list = document.getElementById('hw-list');
  list.innerHTML = '';
  homeworks.forEach((hw, i) => {
    const btn = document.createElement('button');
    btn.className = 'hw-item' + (i === currentIdx ? ' active' : '');
    btn.textContent = hw.label || `HW ${i + 1}`;
    btn.addEventListener('pointerdown', () => onSelect(i));
    list.appendChild(btn);
  });
}
