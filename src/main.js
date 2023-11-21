function toggleMenu() {
  const navegation = document.querySelector('.navegation');
  const menu = document.querySelector('.navegation-menu');
  const links = document.querySelectorAll('.navegation-link');
  const menuIcon = document.querySelector('.menu-icon');

  navegation.classList.toggle('show');
  menu.classList.toggle('show');

  // Cambia el icono a "X" cuando el menú está abierto, y viceversa
  if (navegation.classList.contains('show')) {
    menuIcon.innerHTML = '✕'; // Cambia a "X"
  } else {
    menuIcon.innerHTML = '☰'; // Cambia a hamburguesa
  }

  menuIcon.classList.toggle('transitioning', navegation.classList.contains('show'));

  links.forEach(function (link, index) {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `fadeIn 0.5s forwards ${index / 7 + 0.3}s`;
    }
  });
}

function redirectToProject(url) {
  window.location.href = url;
}