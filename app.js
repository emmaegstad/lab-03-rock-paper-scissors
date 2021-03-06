import { getRandomThrow } from './get-random-throw.js';
import { didUserWin, updateResultText, updateCompResultText } from './utils.js';

const submitButton = document.querySelector('.submit');
const winCount = document.querySelector('.win-count');
const lossCount = document.querySelector('.loss-count');
const resetButton = document.querySelector('.reset');
const resetCounter = document.querySelector('.reset-count');

let wins = 0;
let losses = 0;
let resets = 0;

function updateCounters() {
    winCount.textContent = `TIMES WON: ${wins}`;
    lossCount.textContent = `TIMES LOST: ${losses}`;
}

submitButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input:checked');
    const computerThrow = getRandomThrow();
    const result = didUserWin(userChoice.value, computerThrow);

    if (result === 'draw') {
        updateResultText('Draw');
    } else if (result === 'win') {
        updateResultText('You Win!');
        updateCompResultText(`The computer chose ${computerThrow}.`);
        wins++;
    } else if (result === 'lose') {
        updateResultText('You Lose!');
        updateCompResultText(`The computer chose ${computerThrow}.`);
        losses++;
    }

    updateCounters();
});

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    updateCounters();

    resets++;
    resetCounter.textContent = `Times Reset: ${resets}`;
});
