#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/games/cli.js';
import ifEven from '../src/games/ifEven.js';

// console.log('Welcome to the Brain Games!');

// const name = readlineSync.question('May I have your name?');

// console.log(`Hi, ${greeting(name)}!`);
greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let count = 0;
for (let i = 0; i < 3; i += 1) {
  const randNum = Math.floor(Math.random() * Math.floor(100));
  const question = readlineSync.question(`Is these an odd number: ${randNum}`);
  console.log(question);

  const yourAnswer = readlineSync.question('Your answer: ');

  if (ifEven(yourAnswer, randNum)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`${yourAnswer} is wrong answer ;(.
      
      Let's try again!`);

    count = 0;
    break;
  }
  console.log(count);
}
if (count === 3) {
  console.log(`Congratulations, ${greeting(name)} you won!`);
}
