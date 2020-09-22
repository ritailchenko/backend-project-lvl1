// import readlineSync from 'readline-sync';
import greeting from './cli.js';

const startGame = (func, yourAnswer, question) => {
  greeting();
  console.log('What is the result of the expression?');
  console.log(question());
  //   console.log(yourAnswer);
  let count = 0;

  while (count < 3) {
    if (func() === yourAnswer()) {
      count += 1;
      console.log('Correct!');
    } else {
      count = 0;
      console.log('These is wrong answer. Lets try again!');
      break;
    }
  }
  if (count === 3) {
    console.log('Congratulations, you won!');
  }
};

export default startGame;
