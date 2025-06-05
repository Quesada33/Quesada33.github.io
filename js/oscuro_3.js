document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('toggle-dark-mode');
  const body = document.body;

  // Verifica modo guardado en localStorage
  if (localStorage.getItem('modoOscuro') === 'true') {
    body.classList.add('dark-mode');
  }

  boton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const modoOscuroActivo = body.classList.contains('dark-mode');
    localStorage.setItem('modoOscuro', modoOscuroActivo);
  });
});
