import { input } from "./input.js";

let currentNumber;
let previousNumber;

let amount = 0;

for (let i = 0; i < input.length; i++) {
	if (i === 0) {currentNumber = input[i];} 
  if (i > 0) {
		previousNumber = currentNumber;
		currentNumber = input[i];
		if (currentNumber > previousNumber) {
			amount++;
		}
	}
}

console.log(amount);
