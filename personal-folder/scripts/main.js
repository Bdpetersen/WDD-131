// Import the data from photos.js
import { photos } from './photos.js';

// Select the DOM elements
const galleryGrid = document.querySelector('#gallery-grid');
const allBtn = document.querySelector('#all');
const natureBtn = document.querySelector('#nature');
const urbanBtn = document.querySelector('#urban');
const portraitsBtn = document.querySelector('#portraits');

// Converts a single photo object into an HTML string
function photoCardTemplate(photo) {
    return `
        <div class="card" data-category="${photo.category}">
            <img src="${photo.src}" alt="${photo.description}" loading="lazy">
            <h3>${photo.title}</h3>
            <p>${photo.description}</p>
        </div>
    `;
}

// Takes an array of photo objects and injects them into the DOM
function renderGallery(photoList) {
    // 1. Map over the array to create HTML strings
    const htmlStrings = photoList.map(photoCardTemplate);
    
    // 2. Join the array of strings into one big string and insert it
    galleryGrid.innerHTML = htmlStrings.join('');
}

// Handler for filtering by specific category
function filterPhotos(category) {
    // Use .filter() to create a new array matching the category
    const filtered = photos.filter(photo => photo.category === category);
    
    // Render the new filtered list
    renderGallery(filtered);
}

// "All" button just renders the original full array
allBtn.addEventListener('click', () => {
    renderGallery(photos);
});

// Category buttons call the filter function
natureBtn.addEventListener('click', () => {
    filterPhotos("Nature");
});

urbanBtn.addEventListener('click', () => {
    filterPhotos("Urban");
});

portraitsBtn.addEventListener('click', () => {
    filterPhotos("Portraits");
});

renderGallery(photos);

// Select Modal Elements
const modal = document.querySelector('#image-modal');
const modalImg = document.querySelector('#modal-img');
const captionText = document.querySelector('#modal-caption');
const closeBtn = document.querySelector('.close-btn');

// 1. Open Modal when an image in the gallery is clicked
galleryGrid.addEventListener('click', (e) => {
    // Check if the clicked element is an image
    if (e.target.tagName === 'IMG') {
        modal.style.display = "block";
        modalImg.src = e.target.src; // Use the same source as the thumbnail
        captionText.innerHTML = e.target.alt; // Use the alt text as the caption
    }
});

// 2. Close Modal when the 'x' is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// 3. Close Modal when clicking outside the image (on the dark background)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});