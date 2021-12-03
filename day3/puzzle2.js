import { input } from "./input.js";

let ones = 0;
let zeroes = 0;

let numberPosition = 0;

let inputArray = input;
let inputArray2 = input;

let updateNumbers = () => {
	ones = 0;
	zeroes = 0;
	numberPosition++;
};

for (let i = 0; i < inputArray[0].length; i++) {
	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i].charAt(numberPosition) == 0) { zeroes++; }
		if (inputArray[i].charAt(numberPosition) == 1) { ones++; }
	}

   if (zeroes > ones) {
      let newArray = []; 
      for (let i = inputArray.length - 1; i >= 0; i--) {
         if (inputArray[i].charAt(numberPosition) == 0) { newArray.push(inputArray[i]); }
      }
      inputArray = newArray;
   }
   if (ones >= zeroes) {
      let newArray = []; 
      for (let i = inputArray.length - 1; i >= 0; i--) {
         if (inputArray[i].charAt(numberPosition) == 1) { newArray.push(inputArray[i]); }
      }
      inputArray = newArray;
   }
   updateNumbers();
   if (inputArray.length == 1) { break; }
}

let oxygenGeneratorRating;

if(inputArray.length == 1) { oxygenGeneratorRating = inputArray[0]; }

let oxygen = parseInt(oxygenGeneratorRating, 2);

///////////////////////////////////////////////////////

numberPosition = 0;

for (let i = 0; i < inputArray2[0].length; i++) {
	for (let i = 0; i < inputArray2.length; i++) {
		if (inputArray2[i].charAt(numberPosition) == 0) { zeroes++; }
		if (inputArray2[i].charAt(numberPosition) == 1) { ones++; }
	}

   if (zeroes <= ones) {
      let newArray = []; 
      for (let i = inputArray2.length - 1; i >= 0; i--) {
         if (inputArray2[i].charAt(numberPosition) == 0) { newArray.push(inputArray2[i]); }
      }
      inputArray2 = newArray;
   }
   if (ones < zeroes) {
      let newArray = []; 
      for (let i = inputArray2.length - 1; i >= 0; i--) {
         if (inputArray2[i].charAt(numberPosition) == 1) { newArray.push(inputArray2[i]); }
      }
      inputArray2 = newArray;
   }
   updateNumbers();
   if (inputArray2.length == 1){ break; }
}

let CO2ScrubberRating;

if(inputArray2.length == 1) { CO2ScrubberRating = inputArray2[0]; }

let scrubber = parseInt(CO2ScrubberRating, 2);

console.log("Answer: " + scrubber * oxygen)