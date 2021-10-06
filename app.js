import { getRandomThrow } from "./get-random-throw.js";
import { didUserWin } from "./did-user-win.js";

const submitButton = document.querySelector('.submit');
const winCount = document.querySelector('.win-count');
const lossCount = document.querySelector('.loss-count');

let wins = 0;
let losses = 0;

// user choice
// rock, paper, scissors

// computerThrow
// rock, paper, scissors

// possible outcomes: 'win', 1 'lose', -1 'draw' 0

// if the userThrow === computerThrow return 'draw'
// if the user throws rock && computer throws scissors, return 'win'
// else if the user throws paper && computer throws rock, return 'win'
// else if the user throws scissors && computer throws paper, return 'win'
// else return 'lose'

submitButton.addEventListener('click', () => {
});
