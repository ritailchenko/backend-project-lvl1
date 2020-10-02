const generateRandom = (num) => {
  const randNum = Math.floor(Math.random() * Math.floor(num));
  return randNum;
};

export default generateRandom;
