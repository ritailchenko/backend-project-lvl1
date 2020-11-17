import startGame from '../index.js';
import generateRandomNumFromRange from '../utils/generateRandom.js';

const questionToStart = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgression = (
  numberToStartProgression,
  stepInProgression,
) => {
  const progression = [];
  for (
    let i = numberToStartProgression;
    progression.length < progressionLength;
    i += stepInProgression
  ) {
    progression.push(i);
  }
  return progression;
};
const generateQuestionAndCorrectAnswer = () => {
  const progression = generateProgression(
    generateRandomNumFromRange(2, 11),
    generateRandomNumFromRange(2, 11),
    progressionLength,
  );

  const indexOfMissingNumber = generateRandomNumFromRange(0, progressionLength);

  const correctAnswer = progression[indexOfMissingNumber].toString();

  progression[indexOfMissingNumber] = '..';

  return {
    question: progression.join(', '),
    correctAnswer,
  };
};

export default () => startGame(generateQuestionAndCorrectAnswer, questionToStart);
