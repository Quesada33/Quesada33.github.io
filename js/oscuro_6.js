// oscuro_6.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-tema');
  const body = document.body;

  if (localStorage.getItem('tema') === 'oscuro') {
    body.classList.add('modo-oscuro');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.classList.add('modo-oscuro');
      localStorage.setItem('tema', 'oscuro');
    } else {
      body.classList.remove('modo-oscuro');
      localStorage.setItem('tema', 'claro');
    }
  });
});
