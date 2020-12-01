#!/usr/bin/env -S deno run

import { input } from './day1.input.js'

function findTwoThatSumAs2020(data) {
	for (var i = data.length - 1; i >= 0; i--) {
		for (var j = data.length - 1; j >= 0; j--) {
			if (data[i] + data[j] === 2020)
				return data[i] * data[j];
		}
	}
}

console.log(findTwoThatSumAs2020(input))
