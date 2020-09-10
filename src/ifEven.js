// eslint-disable-next-line consistent-return
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
  } else {
    return false;
  }
};

export default ifEven;
