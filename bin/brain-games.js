#!/usr/bin/env node

console.log("Welcome to the brain games!");

import readlineSync from "readline-sync";

const name = readlineSync.question("what is your name?");
// const name = readlineSync.question('Your answer: ');

console.log(`Hi, ${name.toUpperCase()}, welcome to the game!`);
