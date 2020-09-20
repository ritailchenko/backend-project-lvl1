#!/usr/bin/env node

import startGame from '../src/games/index.js';
import calcGame from '../src/games/randMathExpression.js';

startGame(calcGame, 'What is the result of the expression?');
