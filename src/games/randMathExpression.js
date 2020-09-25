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

const generateMathRandom = () => {
  const mathOperations = ['*', '+', '-'];

  const randNumOne = Math.floor(Math.random() * Math.floor(100));
  const randNumTwo = Math.floor(Math.random() * Math.floor(100));
  // eslint-disable-next-line operator-linebreak
  const randMathOperation =
    mathOperations[Math.floor(Math.random() * Math.floor(3))];

  const question = `Question: ${randNumOne} ${randMathOperation} ${randNumTwo}`;
  const correctAnswer = randMathExpression(
    randMathOperation,
    randNumOne,
    randNumTwo
  );
  return {
    question,
    correctAnswer,
  };
};

startGame(generateMathRandom);
