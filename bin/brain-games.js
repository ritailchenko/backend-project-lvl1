#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

console.log('Welcome to the brain games!');

const name = readlineSync.question('what is your name?');
greeting(name);
