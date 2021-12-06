const input = [
	5, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 1, 1, 1, 3, 5, 1,
	1, 1, 5, 4, 1, 1, 1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 5, 2, 1, 2, 2, 3, 1, 1, 1,
	1, 1, 1, 1, 1, 5, 1, 1, 4, 1, 1, 1, 5, 4, 1, 1, 3, 3, 2, 1, 1, 1, 5, 1, 1, 4,
	1, 1, 5, 1, 1, 5, 1, 2, 3, 1, 5, 1, 3, 2, 1, 3, 1, 1, 4, 1, 1, 1, 1, 2, 1, 2,
	1, 1, 2, 1, 1, 1, 4, 4, 1, 5, 1, 1, 3, 5, 1, 1, 5, 1, 4, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 5, 1, 1, 1, 1,
	4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 3, 1, 2, 1, 2, 1, 3, 1, 3, 4, 1, 1, 1, 1, 1, 1,
	1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 1, 2, 4, 1, 1, 3, 1, 1, 1, 5, 1,
	3, 1, 1, 1, 5, 5, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5,
	1, 4, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 3, 3, 1, 2, 2, 1, 4, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 5, 1, 1, 1, 4, 3, 1, 1, 4,
];

let shoals = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // They live together in shoals, naturally.

for (let x of input) shoals[x]++;

for (let i = 0; i < 80; i++) {
	let parthenogenesisCount = shoals[0];   // This is apparently the word for when an organism reproduces on it's own.

	for (let shoal = 1; shoal < 9; shoal++) {
		shoals[shoal - 1] += shoals[shoal];  // Push all the fish in shoal [1] down to [0].
		shoals[shoal] = 0;                   // Empty the shoal we're currently in.
	}

	shoals[8] += parthenogenesisCount;
	shoals[6] += parthenogenesisCount;
	shoals[0] -= parthenogenesisCount;
}

console.log(shoals.reduce((a, b) => a + b, 0));
