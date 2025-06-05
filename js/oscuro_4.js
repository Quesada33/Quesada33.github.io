// Obtener el checkbox del DOM
const toggle = document.getElementById('toggle-tema');

// Verificar si hay preferencia previa en localStorage
if (localStorage.getItem('modo') === 'oscuro') {
  document.body.classList.add('modo-oscuro');
  toggle.checked = true;
}

// Escuchar los cambios en el checkbox
toggle.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('modo-oscuro');
    localStorage.setItem('modo', 'oscuro');
  } else {
    document.body.classList.remove('modo-oscuro');
    localStorage.setItem('modo', 'claro');
  }
});
