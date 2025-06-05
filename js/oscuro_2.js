document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-tema');
  const body = document.body;

  // Guardar estado en localStorage
  if (localStorage.getItem('modo') === 'oscuro') {
    body.classList.add('modo-oscuro');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    body.classList.toggle('modo-oscuro');
    if (body.classList.contains('modo-oscuro')) {
      localStorage.setItem('modo', 'oscuro');
    } else {
      localStorage.setItem('modo', 'claro');
    }
  });
});
