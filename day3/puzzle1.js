import { input } from "./input.js";

let gammaRate = "-";
let epsilonRate = "-";

let ones = 0;
let zeroes = 0;

let numberPosition = 0;

let atEndOfLoopDoThis = () => {
	ones = 0;
	zeroes = 0;
	numberPosition++;
};

for (let i = 0; i < input[0].length; i++) {
	for (let i = 0; i < input.length; i++) {
		if (input[i].charAt(numberPosition) == 0) {zeroes++;}
		if (input[i].charAt(numberPosition) == 1) {ones++;}
	}

	if (gammaRate == "-" && epsilonRate == "-") {
		if (zeroes > ones) {gammaRate = "0"; epsilonRate = "1";}
		if (ones > zeroes) {gammaRate = "1"; epsilonRate = "0";}
	} 
   else {
		if (zeroes > ones) {gammaRate += "0"; epsilonRate += "1";}
		if (ones > zeroes) {gammaRate += "1"; epsilonRate += "0";}
	}
   atEndOfLoopDoThis();
}

let gamma = parseInt(gammaRate, 2);
let epsilon = parseInt(epsilonRate, 2);

console.log("Power rate: " + gamma * epsilon);