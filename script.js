// JavaScript pour ajouter l'interactivité

    // Changer l'apparence du menu lorsque la page est défilée
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    // Bouton retour en haut
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Affiche le bouton après avoir défilé de 100px
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });

    // Action du bouton pour remonter en haut
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });