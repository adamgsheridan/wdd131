// Character card with properties: name, class, 
// level, health, and image and methods: attacked 
// and levelUp.
const aCharacterCard = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'images/snortleblat.webp',
    attacked: function () {
        if(aCharacterCard.health > 0) {
            aCharacterCard.health = aCharacterCard.health - 20;
            document.querySelector('#health').textContent =
            "Health: " + aCharacterCard.health;
            if (aCharacterCard.health == 0) {
                alert('Character Died');
            }
        }

    },
    levelUp: function () {
        aCharacterCard.level++;
        document.querySelector('#level').textContent = 
        "Level: " + aCharacterCard.level;
    }
};

// Use character card's image in the img tag.
document.querySelector('img').setAttribute('src', aCharacterCard.image);
document.querySelector('img').setAttribute('alt', aCharacterCard.name)

// Add character's name to the card.
document.querySelector('.name').textContent = aCharacterCard.name;

// Update stats with info from character card.
document.querySelector('#class').textContent = 
"Class: " + aCharacterCard.class;

document.querySelector('#level').textContent = 
"Level: " + aCharacterCard.level;

document.querySelector('#health').textContent = 
"Health: " + aCharacterCard.health;

// Make buttons add levels and subtract health
document.querySelector('#levelUp').addEventListener("click", function (){
    aCharacterCard.levelUp();
});

document.querySelector('#attack').addEventListener("click", function (){
    aCharacterCard.attacked();
});