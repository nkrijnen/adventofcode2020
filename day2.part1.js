#!/usr/bin/env -S deno run

import { input } from './day2.input.js'

const pattern =  /(\d+)-(\d+) (.+): (.+)/

function isValid(line) {
	const [_, min, max, validChar, password] = pattern.exec(line);
	const validCharCount = charCount(password, validChar);
	return validCharCount >= parseInt(min) && validCharCount <= parseInt(max);
}

function charCount(password, char) {
	return password.split('').reduce((count, passChar)  => count + (
		passChar === char
	), 0);
}

const count = input.reduce((count, line) => count +
	isValid(line)
, 0);

console.log('How many passwords are valid?', count);