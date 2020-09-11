#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { excludedNum, printProgression } from '../src/progression.js';

console.log('What number is missing in the progression?');

let count = 0;

for (let i = 0; i < 3; i += 1) {
  const randNum = Math.floor(Math.random() * Math.floor(10));

  const numFromArr = excludedNum(randNum);

  const progressionWithMissingNum = readlineSync.question(
    // eslint-disable-next-line comma-dangle
    `Question: ${printProgression(numFromArr)}`
  );
  console.log(progressionWithMissingNum);

  const yourAnswer = parseInt(readlineSync.question('Your answer: '), 10);
  console.log(yourAnswer);

  if (excludedNum(randNum) === yourAnswer) {
    count += 1;
    console.log('Correct!');
  } else {
    count = 0;
    console.log(
      `${yourAnswer} is wrong answer. Correct answer is ${excludedNum(
        // eslint-disable-next-line comma-dangle
        randNum
        // eslint-disable-next-line comma-dangle
      )}. Let's try again!`
    );
    break;
  }
}

if (count === 3) {
  console.log('Congratulations, you won!');
}
