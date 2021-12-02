import { input } from "./input.js";

let horizontalPosition = 0;
let depth = 0;
let aim = 0;

for (let i = 0; i < input.length; i++) {
	if (input[i].direction === "forward") {horizontalPosition += input[i].num; depth += aim * input[i].num;} 
  if (input[i].direction === "down") {aim += input[i].num;} 
  if (input[i].direction === "up") {aim -= input[i].num;}
}

let total = depth * horizontalPosition;

console.log("Total: " + total);
