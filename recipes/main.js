import recipes from './recipes.mjs';

// Random number generator
function random(num) {
	return Math.floor(Math.random() * num);
}

// Get random recipe from list
function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

// Template for Tags
function tagsTemplate(tags) {
	let html = '<div class="tags">';
	// Loop through the tags list and transform the strings to HTML
	tags.forEach(tag => {
		html += `<span class="tag">${tag}</span>`;
	});
	html += '</div>';
	return html;
}

// Template for Ratings
function ratingTemplate(rating) {
	let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

	// Our ratings are always out of 5, so create a for loop from 1 to 5
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			// Output a filled star
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		} else {
			// Output an empty star
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		}
	}

	html += `</span>`;
	return html;
}

// Main Recipe Template
function recipeTemplate(recipe) {
	return `<section class="recipe-card">
		<div class="recipe-image-container">
			<img src="${recipe.image}" alt="${recipe.name}">
		</div>
		
		<div class="recipe-content">
			${tagsTemplate(recipe.tags)}
			
			<h2><a href="#">${recipe.name}</a></h2>

			${ratingTemplate(recipe.rating)}

			<p class="recipe-description">
				${recipe.description}
			</p>
		</div>
	</section>`;
}

// Render Recipes to the DOM
function renderRecipes(recipeList) {
	// Get the element we will output the recipes into
	const outputElement = document.querySelector('#main');
	
	// We need to keep the search form, so we look for existing recipe cards and remove them
	// OR we create a container. The simplest way based on the HTML provided is to 
	// just append after the search bar, but first we clean up old results.
	const existingCards = document.querySelectorAll('.recipe-card');
	existingCards.forEach(card => card.remove());

	// Generate HTML for all recipes in the list
	const htmlStrings = recipeList.map(recipe => recipeTemplate(recipe));

	// Append the new HTML to the main element
	outputElement.insertAdjacentHTML('beforeend', htmlStrings.join(''));
}

// Filter and Search Functionality
function filterRecipes(query) {
	const filtered = recipes.filter(recipe => {
		const lowerQuery = query.toLowerCase();
		return (
			recipe.name.toLowerCase().includes(lowerQuery) ||
			recipe.description.toLowerCase().includes(lowerQuery) ||
			recipe.tags.find(tag => tag.toLowerCase().includes(lowerQuery)) ||
			recipe.recipeIngredient.find(ing => ing.toLowerCase().includes(lowerQuery))
		);
	});

	// Sort by name alphabetically
	const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
	return sorted;
}

function searchHandler(e) {
	e.preventDefault();
	// Get the search input
	const searchInput = document.querySelector('#search-input');
	const query = searchInput.value; // Conversion to lowercase happens in filter function

	// Filter and render
	const filteredRecipes = filterRecipes(query);
	renderRecipes(filteredRecipes);
}

// Initialization
function init() {
	// Get a random recipe
	const recipe = getRandomListEntry(recipes);
	// Render the recipe (passed as an array)
	renderRecipes([recipe]);
}

// Event Listener for Search
document.querySelector('.search-form').addEventListener('submit', searchHandler);

// Run init
init();