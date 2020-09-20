import greeting from './cli.js';

const startGame = (func, question) => {
  greeting();
  console.log(question);
  let count = 0;
  while (count < 3) {
    if (func()) {
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
