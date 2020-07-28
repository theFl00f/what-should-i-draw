const beginButton = document.getElementById('begin');
const titleGroup = document.getElementById('title');
const output = document.getElementById('out')

const data = [
    [
        "kiwi", "apple", "watermelon", "starfruit", "tangerine", "blueberry", "strawberry", "blackberry", "leek", "spring onion", "banana", "cherry", "potato", "chocolate", "whipped cream", "hot sauce", "arugula", "noodles", "egg", "pizza", "plum", "peppermint"
    ],
    [
        "octopus", "bear", "chickadee", "bulldog", "yorkie", "turtle", "frog", "whale", "deer", "elephant", "penguin", "panther", "kitten", "betta fish", "snake", "eel", "worm", "ant", "beetle", "pufferfish", "kangaroo", "koala", "sloth", "moose", "lemur", "lion"
    ]
]

let randomNumbers = []
let words = '';

beginButton.addEventListener('click', function() {
    this.parentNode.removeChild(this);
    titleGroup.classList.add('generate');
    showGenerationPage()
})

const showGenerationPage = () => {
    let node = document.createElement('p');
    let textnode = document.createTextNode('Your words are...')
    node.appendChild(textnode);
    node.classList.add('greeting')
    output.appendChild(node);
    setTimeout(function() {
        document.querySelector('.greeting').classList.add('visible')
    }, 1000)
    getData()
    console.log(words)
}

getData = () => {
    getRandomNumbers(data);
    getWords(data, randomNumbers)
    appendWords(words)
}

const getRandomNumbers = (array) => {
    let arr = []
    for (let i = 0; i < 2; i++) {
        arr[i] = Math.floor((Math.random() * array[i].length))
    }
    return randomNumbers = arr;
}

const getWord = (arr, num) => {
    return arr[num]
}

const getWords = (arr1, arr2) => {
    let arr = []
    for (let i = 0; i < 2; i++) {
        arr[i] = getWord(arr1[i], arr2[i])
    }
    return words = arr;
}

const appendWords = (arr) => {
    let isFirst = true;
    for (let i = 0; i < arr.length; i++) {
        const newLi = document.createElement('li');
        const textNode = document.createTextNode(arr[i])
        newLi.appendChild(textNode);
        output.appendChild(newLi);
        if (isFirst) {
            const newP = document.createElement('p');
            const textNodeP = document.createTextNode('and')
            newP.appendChild(textNodeP);
            output.appendChild(newP);
            isFirst = false;
        }
    }

}