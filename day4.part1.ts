#!/usr/bin/env -S deno run --config tsconfig.json

import { input } from './day4.input.js'

const requiredFields = [
  "byr",
  "iyr",
  "eyr",
  "hgt",
  "hcl",
  "ecl",
  "pid"
];

function parseKeyVals(block: string): any {
  return Object.fromEntries(block.split(/[ \n]+/).map(entry => entry.split(":")));
}

export function passportValid(passportData: string): boolean {
  const props = parseKeyVals(passportData);
  return requiredFields.every(field => props.hasOwnProperty(field));
}

console.log("how many passports are valid?",
  input.split("\n\n").filter(passportValid).length
);
