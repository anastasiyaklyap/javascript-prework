const randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(`wylosowana liczba to ${randomNumber}`);
const computerMove =
	randomNumber == 1 ? 'kamień' : randomNumber == 2 ? 'papier' : 'nożyce';

printMessage(`Mój ruch: ${computerMove}`);
