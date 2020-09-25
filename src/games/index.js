import readlineSync from 'readline-sync';

const startGame = (func) => {
  console.log('Welcome to the brain games!');

  const name = readlineSync.question('what is your name?');
  const nameCap = name.charAt(0).toUpperCase() + name.slice(1);

  console.log(`Hi, ${nameCap}!`);

  console.log('What is the result of the expression?');
  let count = 0;

  while (count < 3) {
    const { question, correctAnswer } = func();

    readlineSync.question(question);

    const yourAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    if (correctAnswer === yourAnswer) {
      count += 1;
      console.log('Correct!');
    } else {
      count = 0;
      console.log(
        `${yourAnswer} these is wrong answer. Lets try again ${nameCap}!`
      );
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${nameCap} you won!`);
  }
};

export default startGame;
