<!-- Header
Зробити анімовані переходи гіперссилок
Зробити центрування гіперссилок -->

<!-- Hero
Зробити анімацію кнопки "Skontaktuj się z nami" - box-shadow annimation -->

<!-- Modal
Dodać animacje aktywnego przycisku "Wyślij" -->

<!-- Dodatkowa opcja funkcji na scroll, pozycjonowanie i kalkulacje hyperlinków.

Kalkulowanie wysokości hedera i scrollowanie do celu z zachowaniem hedera -->

<!-- const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Zapobiega domyślnemu przewijaniu

    const target = event.target.getAttribute('href'); // Pobierz identyfikator celu
    const targetElement = document.querySelector(target); // Pobierz element docelowy
    const targetPosition = targetElement.offsetTop; // Pobierz pozycję celu

    // Oblicz pozycję celu z uwzględnieniem wysokości hedera
    const scrollToPosition = targetPosition - document.querySelector('.header').offsetHeight;

    function animateScroll() {
      const scrollTop = window.scrollY;
      const targetScroll = scrollToPosition;
      const scrollStep = (targetScroll - scrollTop) / 10; // Podziel na 10 kroków

      if (Math.abs(scrollTop - targetScroll) > 1) {
        window.requestAnimationFrame(animateScroll);
        window.scrollTo(scrollTop + scrollStep, 0); // Płynne przewijanie
      } else {
        window.scrollTo(targetScroll, 0);
      }
    }

    animateScroll();
  });
}); -->
