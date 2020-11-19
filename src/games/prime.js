import startGame from '../index.js';
import generateRandomNum from '../utils/generateRandom.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const questionToStart = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAndCorrectAnswer = () => {
  const number = generateRandomNum(2, 101);

  const question = number.toString();

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(generateQuestionAndCorrectAnswer, questionToStart);
