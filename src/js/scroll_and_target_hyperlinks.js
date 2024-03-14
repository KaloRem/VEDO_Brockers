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
    let targetPosition = targetElement.offsetTop; // Pobierz pozycję celu

    // Określ docelową pozycję przewijania w zależności od rozmiaru ekranu
    if (window.matchMedia('(min-width: 600px)').matches) {
      targetPosition -= 146; // Na urządzeniach >= 600px obniż o 180px
    } else {
      targetPosition -= 90; // Na mniejszych urządzeniach obniż o 90px
    }

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth', // Płynne przewijanie
    });
  });
});
