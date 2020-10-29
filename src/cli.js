import readlineSync from 'readline-sync';
import _ from 'lodash';

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('what is your name?');

  const nameCapitalized = _.upperFirst(name);

  console.log(`Hi, ${nameCapitalized}!`);
};

export default () => greeting();
