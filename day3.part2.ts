#!/usr/bin/env -S deno run

import { input } from './day3.input.js'

class Mountain {
	private readonly lines: string[];

	constructor(data: string) {
		this.lines = data.split("\n");
	}

	get height(): number { return this.lines.length; }

	hasTreeAt(x: number, y: number): boolean {
		const line = this.lines[y];
		return line[x % line.length] === "#";
	}
}

class Slope {

	constructor(private right: number, private down: number) {
	}

	slideDown(slope: Mountain): number {
		let x: number = 0;
		let y: number = 0;
		let treesEncountered: number = 0;

		while (y < slope.height) {
			if (slope.hasTreeAt(x, y)) {
				treesEncountered++;
			}
			x += this.right;
			y += this.down;
		}
		return treesEncountered;
	}
}

const slopes = [
	new Slope(1, 1),
	new Slope(3, 1),
	new Slope(5, 1),
	new Slope(7, 1),
	new Slope(1, 2),
]

const mountain = new Mountain(input);
const answer = slopes.map(s => s.slideDown(mountain)).reduce((prev, curr) => prev * curr);

console.log(answer);
