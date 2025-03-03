function toggleMode() {
  let links = document.querySelectorAll('link[rel="stylesheet"], link[rel="alternatestylesheet"]');
  links.forEach(link => {
      link.disabled = !link.disabled;
  });
}