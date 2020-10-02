import startGame from '../index.js';
import generateRandomNum from '../utils.js/generateRandom.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const questionToStart =
  'Answer `yes` if the number is even, otherwise answer `no`';

const generateQuestionAndCorrectAnswer = () => {
  const randNum = generateRandomNum(100);

  const question = `Is these an odd number: ${randNum}`;
  const correctAnswer = isEven(randNum);

  return {
    question,
    correctAnswer,
  };
};

export default () =>
  startGame(generateQuestionAndCorrectAnswer, questionToStart);
