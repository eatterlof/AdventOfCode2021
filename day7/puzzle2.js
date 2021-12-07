//import { input } from './input.js';

let input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

const calcAvg = (arr) => {
   let tot = 0;
   let avg = 0;
   for (let num in input) {
      tot = +tot + +num;
   }
   avg = tot / input.length;
   return Math.round(avg);
}

let fuelSpent = 0;

const changeToAvg = (num) => {
   let diff = Math.abs(num - calcAvg(input));
   if (diff < 0) { Math.abs(diff) }

   console.log("Diff: " + diff)
   for (let i = 1; i < diff+1; i++) {
      fuelSpent += +i;
   }
   console.log("Fuel: " + fuelSpent);
};

for (let num of input) {
	changeToAvg(num);
}

console.log("tot: " + fuelSpent);