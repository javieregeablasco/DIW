function toggleMode() {
  let links = document.querySelectorAll('link[rel="canonical"], link[rel="alternate"]');
  links.forEach(link => {
      link.disabled = !link.disabled;
  });
}