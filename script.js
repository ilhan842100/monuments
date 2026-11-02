const barre = document.getElementById('progression');

window.addEventListener('scroll', () => {
  const haut = document.documentElement.scrollTop;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  barre.style.width = (haut / total * 100) + '%';
});

// Faire apparaître les cartes quand elles entrent à l'écran
const observateur = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach((carte) => observateur.observe(carte));
