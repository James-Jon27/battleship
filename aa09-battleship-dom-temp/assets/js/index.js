import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

const makeHit = (e) => {
	e.preventDefault();
	const button = document.querySelectorAll(".cell");

	const row = e.target.dataset.row;
	const col = e.target.dataset.col;
	const res = board.makeHit(row, col);
	if (!res) {
		e.target.classList.add("miss");
		e.target.style.backgroundColor = "red";
	} else {
		e.target.innerText = res;
		e.target.classList.add("hit");
		e.target.style.backgroundColor = "green";
        e.target.removeEventListener('click', makeHit);
	}

	console.log(board.numRemaining);

	if (board.isGameOver()) {
		button.forEach((square) => {
			square.removeEventListener("click", makeHit);
		});

        const h1 = document.querySelector('h1');
        const youWin = document.createElement('h4');
        youWin.textContent = 'YOU WIN!';
        h1.insertAdjacentElement('afterend', youWin);
	}
};

document.addEventListener("DOMContentLoaded", () => {
	const gameBoard = document.querySelector("#gameboard");

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const square = document.createElement("div");
			square.classList.add("cell");
			square.dataset.row = i;
			square.dataset.col = j;
			gameBoard.appendChild(square);
		}
	}

	const click = document.querySelectorAll(".cell");
	click.forEach((square) => {
		square.addEventListener("click", makeHit);
	});
});
