// import readlineSync from 'readline-sync';
import greeting from './cli.js';

const startGame = (func, question, yourAnswer) => {
  greeting();
  console.log(question);
  let count = 0;

  while (count < 3) {
    // const yourAnswer = parseInt(readlineSync.question('Your answer: '), 10);
    if (func() === yourAnswer) {
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
