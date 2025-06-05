// JS/tema.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-tema');
  const body = document.body;

  // Si ya se guardó una preferencia en localStorage, aplicarla
  if (localStorage.getItem('modoOscuro') === 'true') {
    body.classList.add('dark-mode');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('modoOscuro', toggle.checked);
  });
});
