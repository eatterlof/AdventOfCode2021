import { input } from './input.js';

//let input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

const calcMedian = (arr) => {
	let middle = Math.floor(arr.length / 2);
	arr = [...arr].sort((a, b) => a - b);
	return arr.length % 2 !== 0
		? arr[middle]
		: (arr[middle - 1] + arr[middle]) / 2;
};

const median = calcMedian(input);

let fuelSpent = 0;

const changeToMedian = (num) => {
   let diff = Math.abs(num - median);
   if (diff < 0) { Math.abs(diff) }
   fuelSpent += +diff;
};

for (let num of input) {
	changeToMedian(num);
}

console.log(fuelSpent)
