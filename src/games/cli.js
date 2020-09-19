import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the brain games!');

  const name = readlineSync.question('what is your name?');

  console.log(`Hi, ${name.charAt(0).toUpperCase() + name.slice(1)}!`);
};

export default greeting;
