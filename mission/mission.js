const themeSelector = document.querySelector('#theme-select');
const logo = document.querySelector('#logo');

function changeTheme() {
    // Check the current value of the select element using the correct variable
    if (themeSelector.value === 'dark') {
        // Add the dark class to the body
        document.body.classList.add('dark');
        // Change the source of the logo img to point to the white logo
        logo.src = 'byui-logo_white.png'; // Make sure this file exists
    } else {
        // Remove the dark class
        document.body.classList.remove('dark');
        // Change the logo src to the blue logo
        logo.src = 'byui-logo.webp'; // Fixed the missing closing quote
    }
}

// Add an event listener to the themeSelector element
themeSelector.addEventListener('change', changeTheme);

// Removed the extra closing brace from the end of the file