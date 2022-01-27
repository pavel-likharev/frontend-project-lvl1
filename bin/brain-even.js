#!/usr/bin/env node
import createWelcome from '../src/cli.js';
import createGame from '../src/index.js';
import createEvenGameConsitions from '../src/games/even-numbers.js';

const userName = createWelcome();
createGame(userName, createEvenGameConsitions());
