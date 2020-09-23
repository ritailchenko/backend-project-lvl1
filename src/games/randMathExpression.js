import readlineSync from 'readline-sync';
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

const calcGame = () => {
  const mathOperations = ['*', '+', '-'];

  const randNumOne = Math.floor(Math.random() * Math.floor(100));
  const randNumTwo = Math.floor(Math.random() * Math.floor(100));
  // eslint-disable-next-line operator-linebreak
  const randMathOperation =
    mathOperations[Math.floor(Math.random() * Math.floor(3))];
  // const question = `Question: ${randNumOne} ${randMathOperation} ${randNumTwo}`;
  const question = readlineSync.question(
    // eslint-disable-next-line comma-dangle
    `Question: ${randNumOne} ${randMathOperation} ${randNumTwo}`
  );

  const correctAnswer = randMathExpression();
  // return randMathOperation;
  startGame(question, correctAnswer);
};

export default calcGame;

// const generateQuestion = () => {
//   const mathOperations = ['*', '+', '-'];

//   const randNumOne = Math.floor(Math.random() * Math.floor(100));
//   const randNumTwo = Math.floor(Math.random() * Math.floor(100));
//   // eslint-disable-next-line operator-linebreak
//   const randMathOperation =
//     mathOperations[Math.floor(Math.random() * Math.floor(3))];
//   const question = readlineSync.question(
//     // eslint-disable-next-line comma-dangle
//     `Question: ${randNumOne} ${randMathOperation} ${randNumTwo}`
//   );
//   console.log(question);
//   // const yourAnswer = parseInt(readlineSync.question('Your answer: '), 10);

//   // if (
//   //   randMathExpression(randMathOperation, randNumOne, randNumTwo) === yourAnswer
//   // ) {
//   //   return true;
//   // }
//   // return false;
//   return randMathExpression();
//   // return question;
// };

// const yourAnswer = () => {
//   const answer = parseInt(readlineSync.question('Your answer: '), 10);
//   return answer;
// };
// startGame(randMathExpression);
// calcGame();

// export default startGame;
