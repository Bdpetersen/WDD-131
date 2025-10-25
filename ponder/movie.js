const movies = [
    {
    title: "Spider-Man: Into the Spider-Verse",
    date: "Dec 14, 2018",
    description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
    imgAlt: "Miles Morales swinging through the city",
    ages: "10+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐"
    },
    {
    title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
    imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
    ages: "10+",
    genre: "Drama/Religious",
    stars: "⭐⭐⭐⭐"
    },
    {
    title: "Luca",
    date: "June 18, 2021",
    description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
    imgAlt: "Luca and Alberto standing on the beach",
    ages: "6+",
    genre: "Family/Fantasy",
    stars: "⭐⭐⭐⭐"
    },
    {
    title: "17 Miracles",
    date: "June 3, 2011",
    description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
    imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
    ages: "12+",
    genre: "Historical/Religious",
    stars: "⭐⭐⭐⭐"
    }
];

// Get the container element from the DOM
const movieContainer = document.querySelector('#movie-list');

movies.forEach(movie => {
    // 1. Create a "card" element to hold all the info for one movie
    const movieCard = document.createElement('article');
    
    // 2. Create elements for each piece of movie data
    const title = document.createElement('h2');
    title.textContent = movie.title;

    const date = document.createElement('p');
    date.textContent = `Released: ${movie.date}`;

    const description = document.createElement('p');
    description.textContent = movie.description;

    const image = document.createElement('img');
    image.src = movie.imgSrc;
    image.alt = movie.imgAlt;

    const details = document.createElement('div');
    details.innerHTML = `<strong>Ages:</strong> ${movie.ages} | <strong>Genre:</strong> ${movie.genre}`;
    
    const stars = document.createElement('p');
    stars.textContent = movie.stars;

    // 3. Append all the new elements to the movie card
    movieCard.appendChild(title);
    movieCard.appendChild(image);
    movieCard.appendChild(description);
    movieCard.appendChild(date);
    movieCard.appendChild(details);
    movieCard.appendChild(stars);

    // 4. Append the completed movie card to the main container
    movieContainer.appendChild(movieCard);
});