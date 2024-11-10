if (screen.orientation) {
  screen.orientation.lock('portrait').catch(error => {
    console.error('Nie udało się zablokować orientacji:', error);
  });
}
