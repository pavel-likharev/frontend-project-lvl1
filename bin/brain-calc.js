#!/usr/bin/env node
import createWelcome from '../src/cli.js';
import createGame from '../src/index.js';
import createCalcGameConsitions from '../src/games/calc.js';

const userName = createWelcome();
createGame(userName, createCalcGameConsitions());
