#!/usr/bin/env -S deno run --config tsconfig.json

import { input } from './day5.input.js'

interface Seat {
  row: number,
  column: number
}

function find(code: string): number {
  let lower = 0;
  let upper = Math.pow(2, code.length);
  code.split('').forEach(char => {
    const halfway = lower + (upper - lower) / 2;
    if (char === 'F' || char === 'L') {
      upper = halfway;
    } else {
      lower = halfway;
    }
  });
  return lower;
}

function seatFromCode(code: string): Seat {
  return {
    row: find(code.substr(0, 7)),
    column: find(code.substr(7, 3))
  }
}

// console.log('test - row 44, column 5',
//   seatFromCode('FBFBBFFRLR')
// );

const seatId = (seat: Seat) => seat.row * 8 + seat.column;

// input.split('\n').forEach((code: string) => {
//   const it = seatFromCode(code);
//   console.log(it, seatId(it))
// });

const seatIds = input.split('\n').map((code: string) => seatId(seatFromCode(code)));

console.log('What is the highest seat ID on a boarding pass?',
  Math.max(...seatIds)
);
