const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.getElementById('mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.dataset.visible;

  if (visibility === 'false') {
    primaryNav.dataset.visible = 'true';
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    primaryNav.dataset.visible = 'false';
    navToggle.setAttribute('aria-expanded', 'false');
  }

});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
