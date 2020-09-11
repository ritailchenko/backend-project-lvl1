const excludedNum = (num) => {
  const progression = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

  return progression[num];
};

// console.log(numFromArr);

const printProgression = (num) => {
  const progression = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const index = progression.indexOf(num);

  progression[index] = '..';
  return progression;
};

// console.log(printProgression());
export { excludedNum, printProgression };
