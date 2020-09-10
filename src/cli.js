const greeting = (name) => {
  console.log(`Hi, ${name.toUpperCase()}, welcome to the game!`);
};

const ifEven = (answer, num) => {
  if (
    // eslint-disable-next-line operator-linebreak
    (num % 2 === 0 && answer === 'y') ||
    (num % 2 !== 0 && answer === 'n')
  ) {
    return true;
    // eslint-disable-next-line no-else-return
  } else if (answer !== 'y' || answer !== 'n') {
    console.log('please write `yes` or `no`');
  }
  // else {
  return false;
  // }
};

export { greeting, ifEven };
