const randMathExpression = (randMathOperation, randNumOne, randNumTwo) => {
  let result = 0;

  if (randMathOperation === '+') {
    result = randNumOne + randNumTwo;
  } else if (randMathOperation === '-') {
    result = randNumOne - randNumTwo;
  } else if (randMathOperation === '*') {
    result = randNumOne * randNumTwo;
  }

  return result;
};

export default randMathExpression;
