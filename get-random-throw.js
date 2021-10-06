export function getRandomThrow() {
    const rps = ['rock', 'paper', 'scissors'];
    return rps[Math.floor(Math.random() * 3)];
}