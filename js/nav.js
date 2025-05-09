window.addEventListener('scroll', () => {
  const nav = document.getElementById('sticky-nav');
  if (window.scrollY > window.innerHeight - 50) {
    nav.classList.add('visible');
  } else {
    nav.classList.remove('visible');
  }
});
