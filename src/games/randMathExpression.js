import readlineSync from 'readline-sync';

const calcGame = () => {
  const randMathExpression = (randMathOperation, randNumOne, randNumTwo) => {
    let result = 0;

    if (randMathOperation === '+') {
      result = randNumOne + randNumTwo;
    } else if (randMathOperation === '-') {
      result = randNumOne - randNumTwo;
    } else if (randMathOperation === '*') {
      result = randNumOne * randNumTwo;
    }
    return result;
  };
  // let questionToStartTheGame = 'What is the result of the expression?';
  // console.log('What is the result of the expression?');
  const mathOperations = ['*', '+', '-'];

  const randNumOne = Math.floor(Math.random() * Math.floor(100));
  const randNumTwo = Math.floor(Math.random() * Math.floor(100));
  // eslint-disable-next-line operator-linebreak
  const randMathOperation =
    mathOperations[Math.floor(Math.random() * Math.floor(3))];
  const question = readlineSync.question(
    // eslint-disable-next-line comma-dangle
    `Question: ${randNumOne} ${randMathOperation} ${randNumTwo}`
  );
  console.log(question);
  // console.log(randMathExpression(randMathOperation, randNumOne, randNumTwo));
  return randMathExpression();
  // const yourAnswer = parseInt(readlineSync.question('Your answer: '), 10);
  //   if (
  //     randMathExpression(randMathOperation, randNumOne, randNumTwo) === yourAnswer
  //   ) {
  //     return true;
  //   }
  //   return false;
};
// calcGame();

export default calcGame;
