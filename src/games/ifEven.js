import startGame from './index.js';

const ifEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const questionToStart = `Answer 'yes' if the number is even, otherwise answer 'no'`;
const generateMathRandom = () => {
  const randNum = Math.floor(Math.random() * Math.floor(100));

  const question = `Is these an odd number: ${randNum}`;
  const correctAnswer = ifEven(randNum);

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(generateMathRandom, questionToStart);
