const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
  menu.classList.toggle('hide');
}

menuButton.addEventListener('click', toggleMenu);

function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
}

handleResize(); 
window.addEventListener('resize', handleResize);

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.fullview');

function closeModal() {
    modal.close();
    modal.innerHTML = ''; 
}

function viewImage(event) {
  const imgElement = event.target.closest('img'); 
  
  if (imgElement) {
    const src = imgElement.getAttribute('src');
    const alt = imgElement.getAttribute('alt');

    const fullSrc = src.split('-')[0] + '-full.jpeg'; 

    modal.innerHTML = `
      <img src="${fullSrc}" alt="${alt}">
      <button class='close-viewer' aria-label="Close image viewer">X</button>
    `;

    const closeButton = modal.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeModal);

    modal.showModal();
  }
}

gallery.addEventListener('click', viewImage);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});