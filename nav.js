// =============================================
//  Mon's Learning Games — Navigation & Shared Utilities
// =============================================

// ---- Page transitions ----
function navigateTo(href) {
  document.body.classList.add('page-exit');
  setTimeout(() => { window.location.href = href; }, 220);
}

// ---- Progress persistence (localStorage) ----
function saveProgress(lessonKey, idx) {
  try { localStorage.setItem('progress-' + lessonKey, idx); } catch (e) {}
}
function getProgress(lessonKey) {
  try { return parseInt(localStorage.getItem('progress-' + lessonKey) || '0', 10); } catch (e) { return 0; }
}

// ---- Random encouraging messages ----
const _CORRECT_MSGS = [
  'Amazing! 🎉', 'Brilliant! 🌟', "You're a star! ⭐",
  'Fantastic! 🎊', 'Perfect! 💯', 'Wow! 🤩',
  'Super! 🦸', 'Excellent! 🏆', 'Great job! 👏', 'Awesome! 🔥'
];
const _WRONG_MSGS = [
  'Try again! 💪', 'Oops! Keep going! 🙈', 'Almost there! 🤔',
  'Give it another go! 🔄', 'You can do it! 💪', 'Not yet — try again! 😊'
];
function randomCorrect() { return _CORRECT_MSGS[Math.floor(Math.random() * _CORRECT_MSGS.length)]; }
function randomWrong()   { return _WRONG_MSGS  [Math.floor(Math.random() * _WRONG_MSGS.length)]; }

// ---- Enhanced Fireworks (shared across all lessons) ----
function spawnFireworks(overlayEl) {
  const overlay = overlayEl || document.getElementById('fireworks-overlay');
  if (!overlay) return;
  const emojis = ['⭐', '🌟', '✨', '🎉', '🎊', '🎈', '💫', '🏆', '🎁', '🌈', '💥', '🎶'];
  const colors = ['#FF4757', '#FFD700', '#2ED573', '#2F86EB', '#A855F7', '#FF69B4', '#FF7F50'];
  const count  = window.innerWidth < 500 ? 22 : 35;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      if (Math.random() > 0.42) {
        // Emoji confetti
        el.className = 'firework-emoji';
        const sz = 20 + Math.random() * 26;
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.cssText = `font-size:${sz}px;left:${5 + Math.random() * 88}%;top:${5 + Math.random() * 72}%;animation-duration:${1 + Math.random() * 0.9}s;`;
      } else {
        // Coloured circle
        el.className = 'firework-circle';
        const sz = 14 + Math.random() * 36;
        el.style.cssText = `width:${sz}px;height:${sz}px;background:${colors[Math.floor(Math.random() * colors.length)]};left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-duration:${0.8 + Math.random() * 0.8}s;`;
      }
      overlay.appendChild(el);
      setTimeout(() => el.remove(), 2200);
    }, i * 60);
  }
}

// ---- Service Worker registration ----
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ---- Hook .btn-home buttons to use fade-out transition ----
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn-home').forEach(btn => {
    btn.onclick = null;
    btn.addEventListener('pointerdown', e => {
      e.preventDefault();
      navigateTo('index.html');
    });
  });
});
