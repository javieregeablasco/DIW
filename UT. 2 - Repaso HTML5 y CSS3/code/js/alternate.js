document.addEventListener("DOMContentLoaded", function () {
  let mode = localStorage.getItem("theme") || "Día"; // Cargar el tema guardado o usar "Día"
  setTheme(mode);

  document.getElementById("toggleTheme").addEventListener("click", function () {
      mode = mode === "Día" ? "Noche" : "Día";
      setTheme(mode);
      localStorage.setItem("theme", mode); // Guardar la selección del usuario
  });
});

function setTheme(mode) {
  let styles = document.querySelectorAll('link[rel="stylesheet"], link[rel="alternate stylesheet"]');
  styles.forEach(link => {
      link.disabled = link.title !== mode;
  });
}
