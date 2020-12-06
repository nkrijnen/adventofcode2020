#!/usr/bin/env -S deno run --config tsconfig.json

import { input } from './day5.input.js'

class Seat {
  private row: number;
  private column: number;
  readonly id: number;

  constructor(code: string) {
    this.row = find(code.substr(0, 7));
    this.column = find(code.substr(7, 3));
    this.id = this.row * 8 + this.column;
  }
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

const seats: Seat[] = input.split('\n').map((code: string) => new Seat(code));
seats.sort((a, b) => a.id - b.id);

function findFreeSeatId(seatsSortedById: Seat[]): number | null {
  for (let index = 0; index < seatsSortedById.length - 1; index++) {
    const nextSeatId = seatsSortedById[index].id + 1;
    const nextTakenSeatId = seatsSortedById[index + 1].id;
    if (nextSeatId !== nextTakenSeatId) {
      return nextSeatId;
    }
  }
  return null;
}

console.log('What is yout seat ID?',
  findFreeSeatId(seats)
);
