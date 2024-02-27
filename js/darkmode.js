const darkModeButton = document.getElementById('darkModeButton');

// Evento de clic para el botón de modo nocturno
darkModeButton.addEventListener('click', function() {
  document.body.classList.toggle('darkMode');
});