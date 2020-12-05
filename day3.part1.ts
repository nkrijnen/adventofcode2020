#!/usr/bin/env -S deno run

import { input } from './day3.input.js'

class Slope {
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

class Toboggan {
	slideDown(slope: Slope): number {
		let x: number = 0;
		let y: number = 0;
		let treesEncountered: number = 0;

		while (y < slope.height) {
			if (slope.hasTreeAt(x, y)) {
				treesEncountered++;
			}
			x += 3;
			y += 1;
		}
		return treesEncountered;
	}
}

console.log("how many trees would you encounter?",
	new Toboggan().slideDown(new Slope(input))
);
