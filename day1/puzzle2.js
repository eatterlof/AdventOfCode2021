import { input } from "./input.js";

let amount = 0;

for (let i = 3; i < input.length; i++) {
	let sum1 = input[i - 3] + input[i - 2] + input[i - 1];
	let sum2 = input[i - 2] + input[i - 1] + input[i];

	if (sum1 < sum2) {
		amount++;
	}
}
console.log(amount);
