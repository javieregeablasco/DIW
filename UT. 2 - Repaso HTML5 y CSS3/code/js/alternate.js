function toggleMode() {
  const hojaDia = document.querySelector('link[title="Día"]');
  const hojaNoche = document.querySelector('link[title="Noche"]');

  if (hojaDia.disabled) {
    hojaDia.disabled = false;
    hojaNoche.disabled = true;
    
  } else {
    hojaDia.disabled = true;
    hojaNoche.disabled = false;
  }
}