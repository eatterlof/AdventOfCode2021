//import { draws } from "./input.js";
//import { boards } from "./input.js";

const draws = [
	7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
	20, 8, 19, 3, 26, 1,
];

const bingoBoards = [
	[
		[22, 13, 17, 11, 0],
		[8, 2, 23, 4, 23],
		[21, 9, 14, 16, 7],
		[6, 10, 3, 18, 5],
		[1, 12, 20, 15, 19],
	],
	[
		[3, 15, 0, 2, 22],
		[9, 18, 13, 17, 5],
		[19, 8, 7, 25, 23],
		[20, 11, 10, 24, 4],
		[14, 21, 16, 12, 6],
	],
	[
		[14, 21, 17, 24, 4],
		[10, 16, 15, 9, 19],
		[18, 8, 12, 26, 20],
		[22, 11, 13, 6, 5],
		[2, 0, 12, 3, 7],
	],
];

let boardsWithBingo = [];

let drawnNumbers = [];

for (let draw of draws) {
	drawnNumbers.push(draws[draw]);

	for (let boards = 0; boards < bingoBoards.length; boards++) {
		for (let row = 0; row < row.length; row++) {
			for (let number = 0; number < number[0].length; number++) {
				if (number[0].includes(drawnNumbers[number[0]])) {
					boardsWithBingo.push(bingoBoards[board]);
					break;
				}
			}
		}
	}
}

let score = 0;

let calculateScore = () => {
	for (let board of boardsWithBingo) {
		for (let row = 0; row < row.length; row++) {
			for (let number = 0; number < number[0].length; number++) {
				if (!drawnNumbers.includes(number)) {
					score += number;
				}
			}
		}
	}
};

console.log(score * drawnNumbers.pop);
