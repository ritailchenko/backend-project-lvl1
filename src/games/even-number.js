import startGame from '../index.js';
import generateRandomNum from '../utils/generateRandom.js';

const isEven = (num) => num % 2 === 0;

const questionToStart = 'Answer `yes` if the number is even, otherwise answer `no`';

const generateQuestionAndCorrectAnswer = () => {
  const number = generateRandomNum(2, 11);

  const question = number.toString();

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(generateQuestionAndCorrectAnswer, questionToStart);
