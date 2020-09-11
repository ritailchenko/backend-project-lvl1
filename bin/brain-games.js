#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/games/cli.js';

console.log('Welcome to the brain games!');

const name = readlineSync.question('what is your name?');
greeting(name);

const gameToPlay = readlineSync.question('Which game you would like to play?');

if (gameToPlay === 'brain-even') {
  console.log('lets play brain-even'); // и запускается brain-even
}

export default name;
