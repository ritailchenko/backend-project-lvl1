#!/usr/bin/env node
import readlineSync from 'readline-sync';

import isPrime from '../src/prime.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let count = 0;

for (let i = 0; i < 3; i += 1) {
  const randNum = Math.floor(Math.random() * Math.floor(100));

  const compNum = readlineSync.question(`Number: ${randNum}`);
  console.log(compNum);
  const yourAnswer = readlineSync.question('Your answer: ');
  //   console.log(typeof isPrime(randNum));
  if (
    (isPrime(randNum) === true && yourAnswer === 'yes') ||
    (isPrime(randNum) === false && yourAnswer === 'no')
  ) {
    count += 1;
    console.log('Correct!');
  } else {
    count = 0;
    console.log(
      `${yourAnswer} is wrong answer. Correct answer is ${isPrime(
        randNum
      )}. Let's try again!`
    );
    break;
  }
}

if (count === 3) {
  console.log('Congratulations, you won!');
}
