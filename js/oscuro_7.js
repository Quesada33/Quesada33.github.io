document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-tema');
  const body = document.body;

  // Cargar estado guardado
  const modoOscuroActivo = localStorage.getItem('modo-oscuro') === 'true';
  if (modoOscuroActivo) {
    body.classList.add('modo-oscuro');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.classList.add('modo-oscuro');
      localStorage.setItem('modo-oscuro', 'true');
    } else {
      body.classList.remove('modo-oscuro');
      localStorage.setItem('modo-oscuro', 'false');
    }
  });
});
