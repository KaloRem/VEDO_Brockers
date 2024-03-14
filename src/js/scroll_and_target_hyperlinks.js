const links = document.querySelectorAll('a[href^="#"]');

// Smoth scrolling by hyperlinks
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Zapobiega domyślnemu przewijaniu

    const target = event.target.getAttribute('href'); // Pobierz identyfikator celu
    const targetElement = document.querySelector(target); // Pobierz element docelowy

    const scrollOptions = {
      behavior: 'smooth', // Płynne przewijanie
      duration: 1000, // Czas trwania animacji (w milisekundach)
    };

    window.scrollTo({
      top: targetElement.offsetTop, // Przewiń do góry elementu
      ...scrollOptions,
    });
  });
});

// Scrolling 90px higher than target element
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Zapobiega domyślnemu przewijaniu

    const target = event.target.getAttribute('href'); // Pobierz identyfikator celu
    const targetElement = document.querySelector(target); // Pobierz element docelowy
    const targetPosition = targetElement.offsetTop; // Pobierz pozycję celu

    // Oblicz pozycję 40px wyżej celu
    const scrollToPosition = targetPosition - 90;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth', // Płynne przewijanie
    });
  });
});
