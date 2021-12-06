import { input } from './input.js'

let count = new Map();
let overlaps = 0;

for (let part of input) {
	let a = part[0];
	let b = part[1];

	let x1 = a[0], y1 = a[1];
	let x2 = b[0], y2 = b[1];

	if (x1 == x2) {
		for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
			let key = `${x1}-${y}`;
			let val = (count.get(key) ?? 0) + 1;
			if (val == 2) overlaps++;

			count.set(key, val);
		}
	} else if (y1 == y2) {
		for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
			let key = `${x}-${y1}`;
			let val = (count.get(key) ?? 0) + 1;
			if (val == 2) overlaps++;

			count.set(key, val);
		}
	} 
}
console.log(overlaps);
