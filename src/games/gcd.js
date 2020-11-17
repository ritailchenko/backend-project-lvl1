import startGame from '../index.js';
import generateRandomNum from '../utils/generateRandom.js';

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const questionToStart = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndCorrectAnswer = () => {
  const firstNumber = generateRandomNum(2, 101);
  const secondNumber = generateRandomNum(2, 101);

  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = getGcd(firstNumber, secondNumber).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(generateQuestionAndCorrectAnswer, questionToStart);
