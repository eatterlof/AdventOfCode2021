import { input } from './input.js';

let firstCrab = Math.min(...input)
let lastCrab = Math.max(...input);

let fuelSpent;
let bestLocation = 0xffffffff;

for (let i = firstCrab; i <= lastCrab; i++) {
   fuelSpent = 0;

   for (let crab of input) {
      let diff = Math.abs(crab - i);
      for (let j = 1; j <= diff; j++) {
         fuelSpent += j;
      }
   }

   bestLocation = Math.min(fuelSpent, bestLocation);
}

console.log(bestLocation);