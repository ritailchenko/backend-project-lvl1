import readlineSync from 'readline-sync';
import _ from 'lodash';

const startGame = (generateTheGame, questionToStart) => {
  console.log('Welcome to the brain games!');

  const name = readlineSync.question('what is your name?');

  const nameCapitalized = _.upperFirst(name);

  console.log(`Hi, ${nameCapitalized}!`);
  console.log(questionToStart);
  let score = 0;

  while (score < 3) {
    const { question, correctAnswer } = generateTheGame();

    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer.toString() === userAnswer) {
      score += 1;
      console.log('Correct!');
    } else {
      score = 0;
      console.log(
        // eslint-disable-next-line comma-dangle
        `${userAnswer} these is wrong answer. Correct answer is ${correctAnswer}. Lets try again ${nameCapitalized}!`
      );
      break;
    }
  }
  if (score === 3) {
    console.log(`Congratulations, ${nameCapitalized} you won!`);
  }
};

export default startGame;
