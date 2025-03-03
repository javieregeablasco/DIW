function toggleMode() {
  let links = document.querySelectorAll('link[title="Día"], link[title="Noche"]');
  links.forEach(link => {
      link.disabled = !link.disabled;
  });
}