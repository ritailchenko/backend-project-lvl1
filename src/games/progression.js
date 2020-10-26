import startGame from '../index.js';
import generateRandomNumFromRange from '../utils/generateRandom.js';

const questionToStart = 'What number is missing in the progression?';

const generateProgression = (
  numberToStartProgression,
  stepInProgression,
  progressionLength,
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
  const question = generateProgression(
    generateRandomNumFromRange(2, 11),
    generateRandomNumFromRange(2, 11),
    10,
  );

  const indexOfMissingNumber = generateRandomNumFromRange(0, 10);

  const correctAnswer = question[indexOfMissingNumber];

  question[indexOfMissingNumber] = '..';

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(generateQuestionAndCorrectAnswer, questionToStart);
