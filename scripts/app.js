const beginButton = document.getElementById('begin')
const titleGroup = document.getElementById('title')

const data = {
    food: [
        "kiwi", "apple", "watermelon", "starfruit", "tangerine", "blueberry", "strawberry", "blackberry", "leek", "spring onion", "banana", "cherry", "potato", "chocolate", "whipped cream", "hot sauce", "arugula", "noodles", "egg", "pizza", "plum", "peppermint"
    ],
    animals: [
        "octopus", "bear", "chickadee", "bulldog", "yorkie", "turtle", "frog", "whale", "deer", "elephant", "penguin", "panther", "kitten", "betta fish", "snake", "eel", "worm", "ant", "beetle", "pufferfish", "kangaroo", "koala", "sloth", "moose", "lemur", "lion"
    ]
}

beginButton.addEventListener('click', function() {
    this.parentNode.removeChild(this);
    titleGroup.classList.add('generate')
})