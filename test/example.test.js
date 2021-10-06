// IMPORT MODULES under test here:
import { didUserWin } from '../did-user-win.js';

const test = QUnit.test;

//user: rock, throw: scissors -- win
test('user: rock, throw: scissors', (expect) => {
    const expected = 'win';
    const actual = didUserWin('rock', 'scissors');
    expect.equal(actual, expected);
});

//user: paper, throw: rock -- win
test('user: paper, throw: rock', (expect) => {
    const expected = 'win';
    const actual = didUserWin('paper', 'rock');
    expect.equal(actual, expected);
});

//user: scissors, throw: paper -- win
test('user: scissors, throw: paper', (expect) => {
    const expected = 'win';
    const actual = didUserWin('scissors', 'paper');
    expect.equal(actual, expected);
});

// user: rock, throw: paper-- lose
test('user: rock, throw: paper', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});

// user: paper, throw: scissors-- lose
test('user: paper, throw: scissors', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('paper', 'scissors');
    expect.equal(actual, expected);
});

// user: scissors, throw: rock-- lose
test('user: scissors, throw: rock', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('scissors', 'rock');
    expect.equal(actual, expected);
});
