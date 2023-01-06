const MOVES = Object.freeze({
    Rock: 'rock',
    Paper: 'paper',
    Scissors: 'scissors',
});

const printMessage = (msg) => {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
};

const clearMessages = () => {
    document.getElementById('messages').innerHTML = '';
};

const incrementResult = (player) => {
    let x = document.querySelector('.computer-score');
    if (player === 'user') {
        x = document.querySelector('.player-score');
    }
    const currentScore = Number(x.textContent) + 1;
    x.innerHTML = currentScore;
};

const buttonClicked = (userMove) => {
    clearMessages();
    const getComputerMove = (obj) => {
        const keys = Object.keys(obj);
        return keys[Math.floor(Math.random() * keys.length)];
    };
    const computerMove = MOVES[getComputerMove(MOVES)];
    if (
        (userMove === MOVES.Paper && computerMove === MOVES.Rock) ||
        (userMove === MOVES.Rock && computerMove === MOVES.Scissors) ||
        (userMove === MOVES.Scissors && computerMove === MOVES.Paper)
    ) {
        printMessage('You win!');
        incrementResult('user');
    } else if (userMove === computerMove) {
        printMessage('Tie');
    } else {
        printMessage('You lose :(');
        incrementResult('computer');
    }
    printMessage(`I've played ${computerMove} and you played ${userMove}`);
};

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', () => {
    buttonClicked(MOVES.Rock);
});
buttonPaper.addEventListener('click', () => {
    buttonClicked(MOVES.Paper);
});
buttonScissors.addEventListener('click', () => {
    buttonClicked(MOVES.Scissors);
});
