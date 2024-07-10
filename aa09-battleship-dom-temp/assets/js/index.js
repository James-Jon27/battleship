import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

const makeHit = (e) => {
	e.preventDefault();
	const cell = document.getElementsByClassName("cell");
	console.log(cell);

	row = cell.dataset.row;
	col = cell.dataset.col;
	if (!board.makeHit(row, col)) {
		cell.target.backgroundColor = "red";
	} else {
		cell.target.innerText = board.makeHit(row, col);
		cell.target.backgroundColor = "green";
	}
};

document.addEventListener("DOMContentLoaded", () => {
	const gameBoard = document.querySelector("#gameboard");

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const square = document.createElement("button");
			square.classList.add("cell");
			square.dataset.row = i;
			square.dataset.col = j;
			gameBoard.appendChild(square);
		}
	}

});

const button = document.getElementsByClassName("cell");
button.addEventListener("click", makeHit);