const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#mobile-nav');
function closeMenu(restoreFocus = false) {
  menu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'メニューを開く');
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
});
menu.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.hidden) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
matchMedia('(min-width:801px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

// Start once on entry, pause off screen / in hidden tabs, keep text visible.
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const root = document.documentElement;
  const targets = [...document.querySelectorAll('[data-motion]')];
  root.classList.add('motion-ready');
  const syncVisibility = () => root.classList.toggle('tab-hidden', document.hidden);
  syncVisibility();
  document.addEventListener('visibilitychange', syncVisibility);
  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      if (isIntersecting) target.classList.add('is-playing');
      target.classList.toggle('motion-paused', !isIntersecting);
    }
  }, { threshold: 0.15 });
  for (const target of targets) {
    observer.observe(target);
    target.addEventListener('animationend', () => {
      target.classList.add('motion-done');
      target.classList.remove('is-playing', 'motion-paused');
      observer.unobserve(target);
    }, { once: true });
  }
  reduceMotion.addEventListener('change', event => {
    if (event.matches) {
      observer.disconnect();
      root.classList.remove('motion-ready');
      targets.forEach(target => target.classList.remove('is-playing', 'motion-paused'));
    }
  });
}
