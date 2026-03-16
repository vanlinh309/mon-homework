// Shared sidebar toggle — used by all lesson pages
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const isOpen  = sidebar.classList.toggle('open');
  sidebar.classList.remove('hint');
  document.getElementById('sidebar-toggle').textContent = isOpen ? '‹' : '›';
}

// Build the HW list items in the sidebar
function renderSidebar(homeworks, currentIdx, onSelect) {
  const inner = document.getElementById('sidebar-inner') || (() => {
    // legacy fallback — not used in current templates
    return { querySelector: () => document.getElementById('hw-list') };
  })();

  // Inject the styled header if not already present
  const existingHeader = document.querySelector('.sidebar-header');
  if (!existingHeader) {
    const sidebarInnerEl = document.querySelector('.sidebar-inner');
    if (sidebarInnerEl) {
      const header = document.createElement('div');
      header.className = 'sidebar-header';
      header.innerHTML = '<span class="sidebar-header-icon">📚</span>' +
                         '<span class="sidebar-title">Homework</span>';
      sidebarInnerEl.prepend(header);

      // Remove the old plain .sidebar-title if it exists standalone
      const oldTitle = document.querySelector('.sidebar-title:not(.sidebar-header .sidebar-title)');
      if (oldTitle) oldTitle.remove();
    }
  }

  const list = document.getElementById('hw-list');
  list.innerHTML = '';
  homeworks.forEach((hw, i) => {
    const btn = document.createElement('button');
    btn.className = 'hw-item' + (i === currentIdx ? ' active' : '');

    const numBadge = document.createElement('span');
    numBadge.className = 'hw-num';
    numBadge.textContent = i + 1;

    const label = document.createElement('span');
    label.textContent = hw.label || `HW ${i + 1}`;

    btn.appendChild(numBadge);
    btn.appendChild(label);
    btn.addEventListener('pointerdown', () => onSelect(i));
    list.appendChild(btn);
  });

  // Idea 6: briefly reveal sidebar on first visit to this lesson
  hintSidebar();
}

// Show a quick open→close peek on the first visit per lesson
function hintSidebar() {
  const key = 'sidebar-hinted-' + window.location.pathname;
  if (sessionStorage.getItem(key)) return;
  sessionStorage.setItem(key, '1');

  const sidebar = document.getElementById('sidebar');
  const toggle  = document.getElementById('sidebar-toggle');
  if (!sidebar) return;

  setTimeout(() => {
    sidebar.classList.add('open', 'hint');
    toggle.textContent = '‹';
    setTimeout(() => {
      sidebar.classList.remove('open', 'hint');
      toggle.textContent = '›';
    }, 1400);
  }, 600);
}
