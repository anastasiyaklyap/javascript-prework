const buttonClicked = ({ argButtonName }) => {
	const getMoveName = ({ argMoveId }) => {
		clearMessages();
		switch (argMoveId) {
			case '1':
				return 'rock';
				break;
			case '2':
				return 'paper';
				break;
			case '3':
				return 'scissors';
				break;
			default:
				printMessage({
					msg: `Nie znam ruchu o id ${argMoveId}. Zakładam, że chodziło o "kamień".`,
				});
				return 'rock';
		}
	};

	const displayResult = ({ argPlayerMove, argComputerMove }) => {
		if (
			(argPlayerMove == 'paper' && argComputerMove == 'rock') ||
			(argPlayerMove == 'rock' && argComputerMove == 'scissors') ||
			(argPlayerMove == 'scissors' && argComputerMove == 'paper')
		) {
			printMessage({ msg: 'You win!' });
			incrementResult({ player: 'user' });
		} else if (argPlayerMove === argComputerMove) {
			printMessage({ msg: 'Tie' });
		} else {
			printMessage({ msg: 'You lose :(' });
			incrementResult({ player: 'computer' });
		}
		printMessage({
			msg: `I've played ${argComputerMove} and you played ${argPlayerMove}`,
		});
	};
	const playerMove = getMoveName({ argMoveId: argButtonName });

	const randomNumber = Math.floor(Math.random() * 3 + 1).toString();
	const computerMove = getMoveName({ argMoveId: randomNumber });
	displayResult({ argPlayerMove: playerMove, argComputerMove: computerMove });
};

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', () => {
	buttonClicked({ argButtonName: '1' });
});
buttonPaper.addEventListener('click', () => {
	buttonClicked({ argButtonName: '2' });
});
buttonScissors.addEventListener('click', () => {
	buttonClicked({ argButtonName: '3' });
});
