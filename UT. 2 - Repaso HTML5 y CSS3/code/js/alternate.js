function toggleMode() {
  let links = document.querySelectorAll('link[rel="stylesheet"], link[rel="alternate stylesheet"]');
  links.forEach(link => {
      link.disabled = !link.disabled;
  });
}