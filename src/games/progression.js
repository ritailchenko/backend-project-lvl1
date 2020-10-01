import startGame from './index.js';

const questionToStart = 'What number is missing in the progression?';

const generateMathRandom = () => {
  // const pickProgression = () => {
  const progressions = [
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
    [1, 4, 9, 16, 25, 36, 47, 64, 81, 100],
  ];
  const mathRandForProgression = Math.floor(Math.random() * Math.floor(3));

  const question = progressions[mathRandForProgression];

  const mathRandForExcludeNum = Math.floor(Math.random() * Math.floor(9));
  const correctAnswer = question[mathRandForExcludeNum];
  const index = question.indexOf(correctAnswer);
  //   // progression[index] = '..';

  question[index] = '..';

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(generateMathRandom, questionToStart);
