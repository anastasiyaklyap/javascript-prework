const getMoveName = ({ argMoveId }) => {
	console.log(`wywołano funkcję getMoveName z argumentem: ${argMoveId}`);
	switch (argMoveId) {
		case '1':
			return 'kamień';
			break;
		case '2':
			return 'papier';
			break;
		case '3':
			return 'nożyce';
			break;
		default:
			printMessage(
				`Nie znam ruchu o id ${argMoveId}. Zakładam, że chodziło o "kamień".`
			);
			return 'kamień';
	}
};

const displayResult = ({ argPlayerMove, argComputerMove }) => {
	console.log(
		`wywołano funkcję displayResults z argumentami: ${argPlayerMove}, ${argComputerMove}`
	);

	if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
		printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
		printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
		printMessage('Wygrywasz!');
	} else if (argPlayerMove === argComputerMove) {
		printMessage('Remis');
	} else {
		printMessage('Przegrywasz :(');
	}
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
};
const playerInput = prompt(
	'Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'
);
console.log(`wybór ruchu gracza to: ${playerInput}`);
const playerMove = getMoveName({ argMoveId: playerInput });
console.log(`ruch gracza to: ${playerMove}`);
const randomNumber = Math.floor(Math.random() * 3 + 1).toString();
console.log(`wylosowana liczba to: ${randomNumber}`);
const computerMove = getMoveName({ argMoveId: randomNumber });
console.log(`ruch komputera to: ${computerMove}`);
displayResult({ argPlayerMove: playerMove, argComputerMove: computerMove });
