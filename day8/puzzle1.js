import { input } from './input.js'

let amount = 0;

for (let i = 0; i < input.length; i++) {
   for (let j = 0; j < input[i].length; j++) {
      if (input[i][j].length == 2 || input[i][j].length == 3 || input[i][j].length == 4 || input[i][j].length == 7) { amount += 1 }
   }
}

console.log(amount);
