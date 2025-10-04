const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Toggles the 'active' class on the menu when the button is clicked.
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
