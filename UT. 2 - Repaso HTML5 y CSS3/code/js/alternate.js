function toggleMode() {
  const daySheet = document.querySelector('link[title="Día"]');
  const nightSheet = document.querySelector('link[title="Noche"]');

  if (daySheet.disabled) {
    daySheet.disabled = false;
    nightSheet.disabled = true;
  } else {
    daySheet.disabled = true;
    nightSheet.disabled = false;
  }
}