#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/games/cli.js';
import isPrime from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?');

console.log(`Hi, ${greeting(name)}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let count = 0;

for (let i = 0; i < 3; i += 1) {
  const randNum = Math.floor(Math.random() * Math.floor(100));

  const compNum = readlineSync.question(`Number: ${randNum}`);
  console.log(compNum);
  const yourAnswer = readlineSync.question('Your answer: ');
  //   console.log(typeof isPrime(randNum));
  if (
    // eslint-disable-next-line operator-linebreak
    (isPrime(randNum) === true && yourAnswer === 'yes') ||
    (isPrime(randNum) === false && yourAnswer === 'no')
  ) {
    count += 1;
    console.log('Correct!');
  } else {
    count = 0;
    console.log(`${yourAnswer} is wrong answer. Let's try again!`);
    break;
  }
}

if (count === 3) {
  console.log(`Congratulations, ${greeting(name)} you won!`);
}
