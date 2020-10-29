import startGame from '../index.js';
import generateRandomNum from '../utils/generateRandom.js';

const isPrime = (num) => {
  if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const questionToStart = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let correctAnswer;

const generateQuestionAndCorrectAnswer = () => {
  const number = generateRandomNum(2, 101);

  const question = number;

  correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(generateQuestionAndCorrectAnswer, questionToStart);
