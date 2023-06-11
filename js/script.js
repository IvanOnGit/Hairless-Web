// Obtener elementos del DOM
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

// Agregar evento clic al ícono del menú
menuIcon.addEventListener('click', () => {
  // Alternar la clase 'active' en el ícono del menú
  menuIcon.classList.toggle('active');

  // Mostrar u ocultar el menú de navegación
  navList.classList.toggle('active');
});

// Agregar clase 'sticky' al encabezado al hacer scroll
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 100);
});