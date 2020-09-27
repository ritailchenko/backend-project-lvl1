import startGame from './index.js';

const questionToStart = 'What number is missing in the progression?';

const generateMathRandom = () => {
  const excludedNum = (num) => {
    const progression = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    return progression[num];
  };

  const printProgression = (num) => {
    const progression = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const index = progression.indexOf(num);

    progression[index] = '..';
    return progression;
  };
  const randNum = Math.floor(Math.random() * Math.floor(10));

  const correctAnswer = excludedNum(randNum);

  const question = `Question: ${printProgression(correctAnswer)}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => startGame(generateMathRandom, questionToStart);
