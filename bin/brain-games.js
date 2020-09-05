#!/usr/bin/env node
import greeting from "../src/cli.js";
import readlineSync from "readline-sync";

console.log("Welcome to the brain games!");

const name = readlineSync.question("what is your name?");
greeting(name);
