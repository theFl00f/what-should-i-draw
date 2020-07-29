const beginButton = document.getElementById('begin');
const titleGroup = document.getElementById('title');
const output = document.getElementById('out');

const data = [
    [
        "kiwi", "apple", "watermelon", "starfruit", "tangerine", "blueberry", "strawberry", "blackberry", "leek", "spring onion", "banana", "cherry", "potato", "chocolate", "whipped cream", "hot sauce", "arugula", "noodles", "egg", "pizza", "plum", "peppermint"
    ],
    [
        "octopus", "bear", "chickadee", "bulldog", "yorkie", "turtle", "frog", "whale", "deer", "elephant", "penguin", "panther", "kitten", "betta fish", "snake", "eel", "worm", "ant", "beetle", "pufferfish", "kangaroo", "koala", "sloth", "moose", "lemur", "lion"
    ]
];

let randomNumbers = [];
let words = [];
let prevWords = [];

let isFirstTransition = true;

const showGenerationPage = () => {
    appendGreeting();
    getData();
    appendButton();
};

const appendGreeting = () => {
    let node = document.createElement('p');
    let textnode = document.createTextNode('Your words are...');
    node.appendChild(textnode);
    node.classList.add('greeting');
    output.appendChild(node);
    makeVisible(document.querySelector('.greeting'), 1000);
}

const makeVisible = (element, interval) => {
    setTimeout(function () {
        element.classList.add('visible');
    }, interval);
};

const getData = () => {
    removeWords([...document.getElementsByClassName('word')]);
    getRandomNumbers(data);
    getWords(data, randomNumbers);
    appendWords(words);
};

const getRandomNumbers = (array) => {
    let arr = [];
    for (let i = 0; i < 2; i++) {
        arr[i] = Math.floor((Math.random() * array[i].length));
    };
    return randomNumbers = arr;
};

const getWord = (arr, num) => {
    return arr[num];
};

const getWords = (arr1, arr2) => {
    let arr = [];
    for (let i = 0; i < 2; i++) {
        arr[i] = getWord(arr1[i], arr2[i]);
    };
    return words = arr;
};

const makeLi = (arr, i) => {
    const newLi = document.createElement('li');
    const textNode = document.createTextNode(arr[i]);
    newLi.appendChild(textNode);
    newLi.classList = 'word';
    return output.appendChild(newLi);
};

const makeP = () => {
    const newP = document.createElement('p');
    const textNodeP = document.createTextNode('and');
    newP.appendChild(textNodeP);
    newP.classList = 'word';
    return output.appendChild(newP);
};

const appendWords = (arr) => {
    let isFirst = true;
    for (let i = 0; i < arr.length; i++) {
        makeLi(arr, i);
        if (isFirst) {
            makeP();
            isFirst = false;
        };
    };
    transitionWords();
};

const removeWords = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].remove();
    };
};

const transitionWords = () => {
    const wordArr = [...document.getElementsByClassName('word')];
    let durationArr = [];
    isFirstTransition ? durationArr = [1500, 2100, 2700] : durationArr = [200, 800, 1400];
    for (let i = 0; i < wordArr.length; i++) {
        makeVisible(wordArr[i], durationArr[i]);
    };
    isFirstTransition = false;
};

const appendButton = () => {
    const newButton = document.createElement('button');
    const textNodeB = document.createTextNode('Another!');
    newButton.appendChild(textNodeB);
    newButton.id = 'refresh';
    output.appendChild(newButton);
    newButton.onclick = getData;
    makeVisible(newButton, 3600);
    return;
};

beginButton.addEventListener('click', function() {
    this.parentNode.removeChild(this);
    titleGroup.classList.add('generate');
    showGenerationPage();
})

window.addEventListener('load', function() {
    makeVisible(document.querySelector('main'), 600);
})