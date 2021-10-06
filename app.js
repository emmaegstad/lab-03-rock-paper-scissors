import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';
import { updateResultText } from './utils.js';

const submitButton = document.querySelector('.submit');
const winCount = document.querySelector('.win-count');
const lossCount = document.querySelector('.loss-count');

let wins = 0;
let losses = 0;

submitButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input:checked');
    const computerThrow = getRandomThrow();
    const result = didUserWin(userChoice.value, computerThrow);

    if (result === 'draw') {
        updateResultText('Draw');
    } else if (result === 'win') {
        updateResultText('You Win!');
        wins++;
    } else if (result === 'lose') {
        updateResultText('You Lose!');
        losses++;
    }

    winCount.textContent = `TIMES WON: ${wins}`;
    lossCount.textContent = `TIMES LOST: ${losses}`;
});
