#!/usr/bin/env node
import readlineSync from 'readline-sync';
// import name from './brain-games';
import ifEven from '../src/ifEven.js';

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
    console.log(`${yourAnswer} is wrong answer ;(. Correct answer was "no".
      
      Let's try again!`);
    // console.log(`${yourAnswer} is wrong answer ;(. Correct answer was "no".
    //   Let's try again!`);
    count = 0;
    break;
  }
  console.log(count);
}
if (count === 3) {
  console.log('Congratulations, you won!');
}
