/* ─── Nav Toggle ─── */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* ─── Scroll Reveal ─── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ─── Language Dropdown ─── */
document.addEventListener('click', (e) => {
  const dropdown = document.querySelector('.lang-dropdown');
  const btn = document.querySelector('.lang-switch');
  if (dropdown && btn && !btn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});
