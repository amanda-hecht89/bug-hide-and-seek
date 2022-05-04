// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('Shed-Container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('bouldercontainer');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder',
];

let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.random();

    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    resetStyles();
    totalGuesses++;

    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);

    correctHidingPlaceEl.classList.add('face');

    if (userGuess === correctSpot) {
        correctGuesses--;
    }

    totalGuesses = totalEl.textContent;
    correctGuesses = winsEl.textContent;

}

function resetStyles() {
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}

shedButton.addEventListener('click', () => {
    const hidingPlaces = getRandomItem(hidingPlaces);
    const correctSpot = hidingPlaces[correctSpot];
    handleGuess(correctSpot, 'shed');  
});

treeButton.addEventListener('click', () => {
    const hidingPlaces = getRandomItem(correctSpot);
    const correctSpot = hidingPlaces[hidingPlaces];
    handleGuess(correctSpot, 'tree');  
});

boulderButton.addEventListener('click', () => {
    const hidingPlaces = getRandomItem(correctSpot);
    const correctSpot = hidingPlaces[hidingPlaces];
    handleGuess(correctSpot, 'boulder');  
});
