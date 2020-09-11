const biggestGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return biggestGcd(num2, num1 % num2);
};

// console.log(biggestGcd(10, 20));

export default biggestGcd;
