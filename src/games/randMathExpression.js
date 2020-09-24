// import readlineSync from 'readline-sync';
import startGame from './index.js';

// import runGame from './index';

// export default () => {
//     /*
//      * 1) Создать вопрос
//      * 2) Сгенерировать ответ
//      * 3) Запустить движок
//      */
//     const question = 'how many 1 + 1?';
//     const answer = 2;
//     runGame(question, answer);
// };

const randMathExpression = (randMathOperation, randNumOne, randNumTwo) => {
  let result = 0;

  if (randMathOperation === '+') {
    result = randNumOne + randNumTwo;
  } else if (randMathOperation === '-') {
    result = randNumOne - randNumTwo;
  } else if (randMathOperation === '*') {
    result = randNumOne * randNumTwo;
  }
  // console.log(result);
  return result;
};

const generateMathRandom = () => {
  const mathOperations = ['*', '+', '-'];

  const randNumOne = Math.floor(Math.random() * Math.floor(100));
  const randNumTwo = Math.floor(Math.random() * Math.floor(100));
  const randMathOperation =
    mathOperations[Math.floor(Math.random() * Math.floor(3))];

  const question = `Question: ${randNumOne} ${randMathOperation} ${randNumTwo}`;
  // return question;
  return {
    randNumOne,
    randNumTwo,
    randMathOperation,
  };
};

const { randNumOne, randNumTwo, randMathOperation } = generateMathRandom();

// const generateQuestion = () => {
//   const question = `Question: ${randNumOne} ${randMathOperation} ${randNumTwo}`;
//   return question;
// };
console.log(randNumOne, randNumTwo, randMathOperation);
const correctAnswer = randMathExpression(
  randMathOperation,
  randNumOne,
  randNumTwo
);

// console.log(question);
console.log(correctAnswer);
// startGame(generateMathRandom, correctAnswer);
