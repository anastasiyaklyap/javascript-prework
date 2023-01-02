const printMessage = ({ msg }) => {
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
};

const clearMessages = () => {
	document.getElementById('messages').innerHTML = '';
};

const incrementResult = ({player}) => {
	let x = document.querySelector('.computer-score');
	if (player === 'user') {
		x = document.querySelector('.player-score');
	}
	const currentScore = Number(x.textContent) + 1;
	x.innerHTML = currentScore;
};
