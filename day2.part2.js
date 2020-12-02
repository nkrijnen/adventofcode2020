#!/usr/bin/env -S deno run

import { input } from './day2.input.js'

const pattern =  /(\d+)-(\d+) (.+): (.+)/

function isValid(line) {
	const [_, first, second, validChar, password] = pattern.exec(line);
	const firstChar = password[parseInt(first) - 1];
	const secondChar = password[parseInt(second) - 1];
	const validCount = (firstChar ===  validChar) + (secondChar === validChar);
	return validCount === 1;
}

const count = input.reduce((count, line) => count +
	isValid(line)
, 0);

console.log('How many passwords are valid?', count);
