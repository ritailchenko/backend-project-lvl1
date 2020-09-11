#!/usr/bin/env node
import readlineSync from 'readline-sync';
import biggestGcd from '../src/gcd.js';

console.log('Find the greatest common divisor of given numbers.');

let count = 0;
for (let i = 0; i < 3; i += 1) {
  const randNumOne = Math.floor(Math.random() * Math.floor(100));
  const randNumTwo = Math.floor(Math.random() * Math.floor(100));
  const question = readlineSync.question(
    // eslint-disable-next-line comma-dangle
    `Question: ${randNumOne} ${randNumTwo}`
  );
  console.log(question);
  const yourAnswer = parseInt(readlineSync.question('Your answer: '), 10);

  if (biggestGcd(randNumOne, randNumTwo) === yourAnswer) {
    count += 1;
    console.log('Correct!');
  } else {
    count = 0;
    console.log(
      `${yourAnswer} is wrong answer. Correct answer is ${biggestGcd(
        randNumOne,
        // eslint-disable-next-line comma-dangle
        randNumTwo
        // eslint-disable-next-line comma-dangle
      )}. Let's try again!`
    );
    break;
  }
}

if (count === 3) {
  console.log('Congratulations, you won!');
}
