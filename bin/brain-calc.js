#!/usr/bin/env node
import readlineSync from 'readline-sync';

import randMathExpression from '../src/randMathExpression.js';

const mathOperations = ['*', '+', '-'];

console.log('What is the result of the expression?');

// console.log(yourAnswer);
// console.log(compAnswer);

let count = 0;
for (let i = 0; i < 3; i += 1) {
  const randNumOne = Math.floor(Math.random() * Math.floor(100));
  const randNumTwo = Math.floor(Math.random() * Math.floor(100));
  // eslint-disable-next-line operator-linebreak
  const randMathOperation =
    mathOperations[Math.floor(Math.random() * Math.floor(3))];
  const question = readlineSync.question(
    // eslint-disable-next-line comma-dangle
    `Question: ${randNumOne} ${randMathOperation} ${randNumTwo}`
  );
  console.log(question);

  const yourAnswer = parseInt(readlineSync.question('Your answer: '), 10);
  if (
    randMathExpression(randMathOperation, randNumOne, randNumTwo) === yourAnswer
  ) {
    count += 1;
    console.log('Correct!');
  } else {
    count = 0;
    console.log(
      `${yourAnswer} is wrong answer. Correct answer is ${randMathExpression(
        randMathOperation,
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
