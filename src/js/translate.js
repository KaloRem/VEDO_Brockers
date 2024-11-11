document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'pl';
  changeLanguage(savedLanguage);
});

// Funkcja zmiany języka
function changeLanguage(lang) {
  // Obiekt zawierający tłumaczenia dla każdego języka
  const translations = {
    pl: {
      heroHeadline: 'Znajdź swój DOM w Krakowie',
      heroCalendarHeadline: 'Zarezerwuj konsultację z nami',
    },
    ua: {
      heroHeadline: 'Знайди свій дім в Кракові',
      heroCalendarHeadline: 'Зарезервуй з нами консультацію',
    },
  };
  // Sprawdza, czy dany język istnieje w obiekcie tłumaczeń
  if (translations[lang]) {
    // Przypisuje teksty z obiektu tłumaczeń do odpowiednich elementów HTML
    document.getElementById('heroHeadline').innerText =
      translations[lang].heroHeadline;
    document.getElementById('heroCalendarHeadline').innerText =
      translations[lang].heroCalendarHeadline;

    localStorage.setItem('selectedLanguage', lang);
  }
}

// Przypisanie do `window` (globalnego obiektu)
window.changeLanguage = changeLanguage;
