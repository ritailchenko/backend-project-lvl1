import readlineSync from 'readline-sync';
import startGame from './index.js';

const randMathExpression = (randMathOperation, randNumOne, randNumTwo) => {
  let result = 0;

  if (randMathOperation === '+') {
    result = randNumOne + randNumTwo;
  } else if (randMathOperation === '-') {
    result = randNumOne - randNumTwo;
  } else if (randMathOperation === '*') {
    result = randNumOne * randNumTwo;
  }
  return result;
};

const generateQuestion = () => {
  const mathOperations = ['*', '+', '-'];

  const randNumOne = Math.floor(Math.random() * Math.floor(100));
  const randNumTwo = Math.floor(Math.random() * Math.floor(100));
  // eslint-disable-next-line operator-linebreak
  const randMathOperation =
    mathOperations[Math.floor(Math.random() * Math.floor(3))];
  const question = readlineSync.question(
    // eslint-disable-next-line comma-dangle
    `Question: ${randNumOne} ${randMathOperation} ${randNumTwo}`
  );
  // console.log(question);
  // const yourAnswer = parseInt(readlineSync.question('Your answer: '), 10);

  // if (
  //   randMathExpression(randMathOperation, randNumOne, randNumTwo) === yourAnswer
  // ) {
  //   return true;
  // }
  // return false;
  // return randMathExpression();
  return question;
};

const yourAnswer = () => {
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  return answer;
};
startGame(randMathExpression, yourAnswer, generateQuestion);
// calcGame();

export default startGame;
