import startGame from '../index.js';
import generateRandomNum from '../utils.js/generateRandom.js';

const generateArithmeticOperation = (
  randMathOperation,
  randNumOne,
  randNumTwo
) => {
  switch (randMathOperation) {
    case '*':
      return randNumOne * randNumTwo;
    default:
    case '+':
      return randNumOne + randNumTwo;
    case '-':
      return randNumOne - randNumTwo;
  }
};
const questionToStart = 'What is the result of the expression?';

const generateQuestionAndCorrectAnswer = () => {
  const mathOperations = ['*', '+', '-'];

  const randNumOne = generateRandomNum(100);
  const randNumTwo = generateRandomNum(100);
  // eslint-disable-next-line operator-linebreak
  const randMathOperation = mathOperations[generateRandomNum(3)];

  const question = `Question: ${randNumOne} ${randMathOperation} ${randNumTwo}`;
  const correctAnswer = generateArithmeticOperation(
    randMathOperation,
    randNumOne,
    randNumTwo
  );

  return {
    question,
    correctAnswer,
  };
};

export default () =>
  startGame(generateQuestionAndCorrectAnswer, questionToStart);
