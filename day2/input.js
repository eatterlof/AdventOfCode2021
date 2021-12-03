// Learning Regex to replace the original string with an array of objects containing 2 properties(direction and num).

// Find: ([a-z]+) ([0-9]+)
// Replace: {direction : "$1",num : $2},
// ^^^^ Regex ^^^^

export const input = [
	// vvvv Result vvvv
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 2 },
	{ direction: "down", num: 4 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 4 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 5 },
	{ direction: "up", num: 7 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 2 },
	{ direction: "up", num: 3 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 3 },
	{ direction: "up", num: 2 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 7 },
	{ direction: "up", num: 1 },
	{ direction: "up", num: 3 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 2 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 2 },
	{ direction: "up", num: 5 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 6 },
	{ direction: "up", num: 6 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 9 },
	{ direction: "up", num: 9 },
	{ direction: "up", num: 8 },
	{ direction: "up", num: 4 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 4 },
	{ direction: "up", num: 2 },
	{ direction: "forward", num: 9 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 5 },
	{ direction: "up", num: 9 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 8 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 8 },
	{ direction: "up", num: 3 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 1 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 4 },
	{ direction: "up", num: 7 },
	{ direction: "up", num: 2 },
	{ direction: "up", num: 9 },
	{ direction: "up", num: 4 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 2 },
	{ direction: "up", num: 7 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 9 },
	{ direction: "up", num: 2 },
	{ direction: "up", num: 7 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 1 },
	{ direction: "up", num: 5 },
	{ direction: "up", num: 5 },
	{ direction: "forward", num: 9 },
	{ direction: "up", num: 3 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 1 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 5 },
	{ direction: "up", num: 9 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 1 },
	{ direction: "up", num: 2 },
	{ direction: "up", num: 9 },
	{ direction: "forward", num: 4 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 7 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 7 },
	{ direction: "up", num: 1 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 1 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 8 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 6 },
	{ direction: "up", num: 3 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 7 },
	{ direction: "up", num: 7 },
	{ direction: "up", num: 8 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 3 },
	{ direction: "up", num: 2 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 2 },
	{ direction: "up", num: 3 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 2 },
	{ direction: "up", num: 8 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 1 },
	{ direction: "up", num: 1 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 7 },
	{ direction: "up", num: 3 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 2 },
	{ direction: "up", num: 9 },
	{ direction: "up", num: 3 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 4 },
	{ direction: "up", num: 3 },
	{ direction: "forward", num: 4 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 6 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 4 },
	{ direction: "up", num: 1 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 5 },
	{ direction: "up", num: 2 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 9 },
	{ direction: "up", num: 9 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 4 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 4 },
	{ direction: "up", num: 8 },
	{ direction: "up", num: 9 },
	{ direction: "up", num: 2 },
	{ direction: "up", num: 5 },
	{ direction: "up", num: 5 },
	{ direction: "forward", num: 9 },
	{ direction: "up", num: 1 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 9 },
	{ direction: "up", num: 2 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 4 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 9 },
	{ direction: "up", num: 5 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 4 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 4 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 5 },
	{ direction: "up", num: 1 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 3 },
	{ direction: "up", num: 1 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 2 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 4 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 9 },
	{ direction: "up", num: 3 },
	{ direction: "up", num: 1 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 2 },
	{ direction: "up", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 6 },
	{ direction: "up", num: 3 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 5 },
	{ direction: "up", num: 1 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 8 },
	{ direction: "up", num: 9 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 7 },
	{ direction: "up", num: 2 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 7 },
	{ direction: "up", num: 7 },
	{ direction: "down", num: 6 },
	{ direction: "up", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 4 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 5 },
	{ direction: "up", num: 4 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 2 },
	{ direction: "up", num: 9 },
	{ direction: "up", num: 4 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 7 },
	{ direction: "up", num: 8 },
	{ direction: "up", num: 4 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 4 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 1 },
	{ direction: "up", num: 3 },
	{ direction: "up", num: 9 },
	{ direction: "down", num: 6 },
	{ direction: "up", num: 4 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 4 },
	{ direction: "forward", num: 3 },
	{ direction: "up", num: 8 },
	{ direction: "up", num: 3 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 4 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 8 },
	{ direction: "up", num: 4 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 6 },
	{ direction: "up", num: 9 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 2 },
	{ direction: "up", num: 9 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 4 },
	{ direction: "up", num: 1 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 3 },
	{ direction: "up", num: 7 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 7 },
	{ direction: "up", num: 9 },
	{ direction: "up", num: 3 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 6 },
	{ direction: "up", num: 5 },
	{ direction: "up", num: 5 },
	{ direction: "forward", num: 4 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 1 },
	{ direction: "up", num: 3 },
	{ direction: "up", num: 1 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 2 },
	{ direction: "up", num: 7 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 1 },
	{ direction: "up", num: 4 },
	{ direction: "up", num: 8 },
	{ direction: "up", num: 7 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 4 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 4 },
	{ direction: "forward", num: 4 },
	{ direction: "up", num: 1 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 3 },
	{ direction: "up", num: 8 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 9 },
	{ direction: "up", num: 3 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 2 },
	{ direction: "up", num: 7 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 2 },
	{ direction: "up", num: 2 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 4 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 4 },
	{ direction: "up", num: 4 },
	{ direction: "forward", num: 4 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 9 },
	{ direction: "up", num: 2 },
	{ direction: "up", num: 1 },
	{ direction: "down", num: 2 },
	{ direction: "up", num: 4 },
	{ direction: "up", num: 5 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 3 },
	{ direction: "up", num: 8 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 4 },
	{ direction: "up", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 8 },
	{ direction: "up", num: 1 },
	{ direction: "up", num: 5 },
	{ direction: "up", num: 2 },
	{ direction: "up", num: 2 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 7 },
	{ direction: "up", num: 8 },
	{ direction: "forward", num: 5 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 2 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 9 },
	{ direction: "up", num: 6 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 7 },
	{ direction: "up", num: 9 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 4 },
	{ direction: "up", num: 6 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 2 },
	{ direction: "up", num: 6 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 4 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 1 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 2 },
	{ direction: "up", num: 9 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 7 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 9 },
	{ direction: "up", num: 1 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 9 },
	{ direction: "up", num: 5 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 2 },
	{ direction: "up", num: 3 },
	{ direction: "up", num: 9 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 7 },
	{ direction: "up", num: 7 },
	{ direction: "forward", num: 3 },
	{ direction: "up", num: 6 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 4 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 1 },
	{ direction: "up", num: 1 },
	{ direction: "up", num: 3 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 3 },
	{ direction: "up", num: 9 },
	{ direction: "down", num: 4 },
	{ direction: "up", num: 2 },
	{ direction: "down", num: 3 },
	{ direction: "up", num: 1 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 6 },
	{ direction: "up", num: 3 },
	{ direction: "forward", num: 2 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 7 },
	{ direction: "up", num: 9 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 3 },
	{ direction: "up", num: 6 },
	{ direction: "up", num: 6 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 3 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 7 },
	{ direction: "up", num: 7 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 9 },
	{ direction: "up", num: 6 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 1 },
	{ direction: "up", num: 7 },
	{ direction: "up", num: 8 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 1 },
	{ direction: "up", num: 2 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 6 },
	{ direction: "up", num: 3 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 2 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 5 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 6 },
	{ direction: "up", num: 6 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 1 },
	{ direction: "up", num: 1 },
	{ direction: "up", num: 6 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 4 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 1 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 6 },
	{ direction: "up", num: 9 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 5 },
	{ direction: "up", num: 2 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 6 },
	{ direction: "down", num: 4 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 6 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 7 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 5 },
	{ direction: "up", num: 8 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 7 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 7 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 9 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 3 },
	{ direction: "up", num: 6 },
	{ direction: "up", num: 9 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 5 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 8 },
	{ direction: "forward", num: 6 },
	{ direction: "forward", num: 5 },
	{ direction: "up", num: 4 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 9 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 2 },
	{ direction: "up", num: 6 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 2 },
	{ direction: "up", num: 3 },
	{ direction: "down", num: 3 },
	{ direction: "up", num: 2 },
	{ direction: "up", num: 1 },
	{ direction: "up", num: 5 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 8 },
	{ direction: "up", num: 3 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 7 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 4 },
	{ direction: "up", num: 3 },
	{ direction: "forward", num: 2 },
	{ direction: "up", num: 5 },
	{ direction: "down", num: 4 },
	{ direction: "down", num: 4 },
	{ direction: "up", num: 5 },
	{ direction: "forward", num: 8 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 6 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 1 },
	{ direction: "down", num: 3 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 3 },
	{ direction: "up", num: 2 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 9 },
	{ direction: "up", num: 8 },
	{ direction: "forward", num: 8 },
	{ direction: "up", num: 8 },
	{ direction: "forward", num: 1 },
	{ direction: "forward", num: 9 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 4 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 2 },
	{ direction: "down", num: 2 },
	{ direction: "down", num: 5 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 5 },
	{ direction: "forward", num: 8 },
	{ direction: "up", num: 3 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 1 },
	{ direction: "forward", num: 3 },
	{ direction: "down", num: 9 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 2 },
	{ direction: "forward", num: 7 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 2 },
	{ direction: "forward", num: 9 },
	{ direction: "up", num: 5 },
	{ direction: "up", num: 7 },
	{ direction: "forward", num: 8 },
	{ direction: "forward", num: 1 },
	{ direction: "down", num: 7 },
	{ direction: "down", num: 8 },
	{ direction: "down", num: 3 },
	{ direction: "forward", num: 6 },
];