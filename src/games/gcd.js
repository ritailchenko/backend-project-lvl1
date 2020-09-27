import startGame from './index.js';

const biggestGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return biggestGcd(num2, num1 % num2);
};

const questionToStart = `Find the greatest common divisor of given numbers.`;

const generateMathRandom = () => {
  const randNumOne = Math.floor(Math.random() * Math.floor(100));
  const randNumTwo = Math.floor(Math.random() * Math.floor(100));

  const question = `Question: ${randNumOne} ${randNumTwo}`;

  const correctAnswer = biggestGcd(randNumOne, randNumTwo);

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(generateMathRandom, questionToStart);
