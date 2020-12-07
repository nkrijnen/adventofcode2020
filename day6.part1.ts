#!/usr/bin/env -S deno run --config tsconfig.json

import { input } from './day6.input.js'

const groups = input.split('\n\n');

function uniqueCharCount(group: string): number {
  return new Set(group.replace(/\n/g, "").split('')).size;
}

const countOfQuestionsWithYesPerGroup: number[] = groups.map(uniqueCharCount);

const sum = countOfQuestionsWithYesPerGroup.reduce((a, b) => a + b, 0);

console.log('What is the sum of those counts?',
  sum
);
