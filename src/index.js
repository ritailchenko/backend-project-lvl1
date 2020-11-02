import readlineSync from 'readline-sync';
import _ from 'lodash';

console.log('Welcome to the brain games!');

const name = readlineSync.question('what is your name?');

const nameCapitalized = _.upperFirst(name);

console.log(`Hi, ${nameCapitalized}!`);
let scoreOfTheGame = 0;
const numberOfRounds = 3;

const isGameOver = (score) => score === numberOfRounds;

const startGame = (generateGame, questionToStart) => {
  console.log(questionToStart);

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = generateGame();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer.toString() === userAnswer) {
      scoreOfTheGame += 1;
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} these is wrong answer. Correct answer is ${correctAnswer}. Lets try again ${nameCapitalized}!`,
      );
      break;
    }
  }

  if (isGameOver(scoreOfTheGame)) {
    console.log(`Congratulations, ${nameCapitalized} you won!`);
  }
};

export default startGame;
