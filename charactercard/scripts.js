// 1. Define the Character Object
const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    image: "snortleblat.webp",

    // 2. Define the .attacked() method
    attacked: function() {
        this.health -= 20;
        
        if (this.health <= 0) {
            this.health = 0; // Ensure health doesn't go negative on display
            updateCard();
            alert(`${this.name} has died! Game over.`);
            // Disable buttons after death
            document.getElementById('attack-button').disabled = true;
            document.getElementById('level-up-button').disabled = true;
        } else {
            updateCard();
            console.log(`${this.name} was attacked. Health is now: ${this.health}`);
        }
    },

    // 3. Define the .levelUp() method
    levelUp: function() {
        this.level += 1;
        updateCard();
        console.log(`${this.name} leveled up! Level is now: ${this.level}`);
    }
};

// Function to update the DOM (HTML) with the character's current properties
function updateCard() {
    document.getElementById('character-name').textContent = character.name;
    document.getElementById('character-class').textContent = character.class;
    document.getElementById('character-level').textContent = character.level;
    document.getElementById('character-health').textContent = character.health;
    // Optional: set image src if you want the image to be managed by JS
    // document.querySelector('.image').src = character.image; 
}

// Initial card load
updateCard();

// 4. Add Event Listeners to the buttons
document.getElementById('attack-button').addEventListener('click', () => {
    character.attacked();
});

document.getElementById('level-up-button').addEventListener('click', () => {
    character.levelUp();
});