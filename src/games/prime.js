import startGame from './index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// eslint-disable-next-line operator-linebreak
const questionToStart =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateMathRandom = () => {
  const randNum = Math.floor(Math.random() * Math.floor(100));

  const question = `Number: ${randNum}`;

  const correctAnswer = isPrime(randNum);

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(generateMathRandom, questionToStart);
