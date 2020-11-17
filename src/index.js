import readlineSync from 'readline-sync';
import _ from 'lodash';

const numberOfRounds = 3;

const startGame = (generateGame, questionToStart) => {
  console.log('Welcome to the brain games!');

  const name = readlineSync.question('what is your name?');

  const nameCapitalized = _.upperFirst(name);

  console.log(`Hi, ${nameCapitalized}!`);
  console.log(questionToStart);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const { question, correctAnswer } = generateGame();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(
        `${userAnswer} these is wrong answer. Correct answer is ${correctAnswer}. Lets try again ${nameCapitalized}!`,
      );
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${nameCapitalized} you won!`);
};

export default startGame;
