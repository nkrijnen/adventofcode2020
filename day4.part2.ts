#!/usr/bin/env -S deno run --config tsconfig.json

import { input } from './day4.input.js'

type Validator = (value: string) => boolean;

function betweenValidator(min: number, max: number): Validator {
  return value => {
    const intValue = parseInt(value);
    return intValue >= min && intValue <= max
  };
}

function yearValidator(min: number, max: number): Validator {
  return year => year.length === 4 && betweenValidator(min, max)(year);
}

function heightValid(height: string): boolean {
  if (height.endsWith("cm")) {
    return betweenValidator(150, 193)(height);
  }
  if (height.endsWith("in")) {
    return betweenValidator(59, 76)(height);
  }
  return false;
}

function regexValidator(regex: RegExp): Validator {
  return value => value.match(regex) !== null;
}

interface RequiredFieldMap { [key: string]: Validator; }

const requiredFields: RequiredFieldMap = {
  "byr": yearValidator(1920, 2002),
  "iyr": yearValidator(2010, 2020),
  "eyr": yearValidator(2020, 2030),
  "hgt": heightValid,
  "hcl": regexValidator(/^\#[0-9a-f]{6}$/), // a # followed by exactly six characters 0-9 or a-f
  "ecl": regexValidator(/^amb|blu|brn|gry|grn|hzl|oth$/),
  "pid": regexValidator(/^[0-9]{9}$/)
};

function parseKeyVals(block: string): any {
  return Object.fromEntries(block.split(/[ \n]+/).map(entry => entry.split(":")));
}

export function passportValid(passportData: string): boolean {
  const props = parseKeyVals(passportData);
  return Object.entries(requiredFields).every(([field, validator]) =>
    props.hasOwnProperty(field) && validator(props[field])
  );
}

console.log("how many passports are valid?",
  input.split("\n\n").filter(passportValid).length
);
