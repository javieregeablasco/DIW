function toggleMode() {
  const hojaDia = document.querySelector('link[title="Día"]');
  const hojaNoche = document.querySelector('link[title="Noche"]');
  const texto = document.getElementById("btn");

  if (hojaDia.disabled) {
    hojaDia.disabled = false;
    hojaNoche.disabled = true;
    texto.innerHTML = "Modo noche";

  } else {
    hojaDia.disabled = true;
    hojaNoche.disabled = false;
    texto.innerHTML = "Modo día";
  }
}