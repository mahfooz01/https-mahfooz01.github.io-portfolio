// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Status bar clock — reads like a live monitor, updates quietly
const clockEl = document.getElementById('statusClock');
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  clockEl.textContent = `Last checked: ${time}`;
}
updateClock();
setInterval(updateClock, 30000);

// Scroll-reveal for sections
const revealTargets = document.querySelectorAll('.section, .hero');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((el) => observer.observe(el));
