#!/usr/bin/env -S deno run

import { input } from './day1.input.js'

function findThreeThatSumAs2020(data) {
	for (var i = data.length - 1; i >= 0; i--) {
		for (var j = data.length - 1; j >= 0; j--) {
			for (var k = data.length - 1; k >= 0; k--) {
				if (data[i] + data[j] + data[k] === 2020)
					return data[i] * data[j] * data[k];
			}
		}
	}
}

console.log(findThreeThatSumAs2020(input))
