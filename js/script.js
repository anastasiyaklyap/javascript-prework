const randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(`wylosowana liczba to ${randomNumber}`);
const computerMove =
	randomNumber === 1 ? 'kamień' : randomNumber === 2 ? 'papier' : 'nożyce';

printMessage(`Mój ruch: ${computerMove}`);

let playerMove;
const playerInput = prompt(
	'Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'
);
console.log(`Wpisana odpowiedź to: ${playerInput}`);

if (playerInput == 1) {
	playerMove = 'kamień';
} else if (playerInput == 2) {
	playerMove = 'papier';
} else if (playerInput == 3) {
	playerMove = 'nożyce';
} else {
	printMessage('błędny ruch');
	playerMove = 'kamień';
}

printMessage(`Twój ruch ${playerMove}`);
