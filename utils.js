const resultText = document.querySelector('.game-result__text');
const compText = document.querySelector('.comp-result__text');

export function didUserWin(player, computer) {

    if (player === computer) {
        return 'draw';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win';
    } else {
        return 'lose';
    }

}

export function updateResultText(value) {
    resultText.textContent = value;
}

export function updateCompResultText(value) {
    compText.textContent = value;
}
