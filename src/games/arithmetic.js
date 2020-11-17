import startGame from '../index.js';
import generateRandomNum from '../utils/generateRandom.js';

const generateArithmeticOperation = (
  mathOperation,
  numOne,
  numTwo,
) => {
  switch (mathOperation) {
    case '*':
      return numOne * numTwo;
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    default:
      throw new Error(`Unknown operation: '${mathOperation}'!`);
  }
};
const questionToStart = 'What is the result of the expression?';
const mathOperations = ['*', '+', '-'];
const generateQuestionAndCorrectAnswer = () => {
  const firstNumber = generateRandomNum(2, 101);
  const secondNumber = generateRandomNum(2, 10);

  const randMathOperation = mathOperations[generateRandomNum(0, mathOperations.length)];

  const question = `${firstNumber} ${randMathOperation} ${secondNumber}`;
  const correctAnswer = generateArithmeticOperation(
    randMathOperation,
    firstNumber,
    secondNumber,
  ).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(generateQuestionAndCorrectAnswer, questionToStart);
