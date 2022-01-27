#!/usr/bin/env node
import createWelcome from '../src/cli.js';
import createGame from '../src/index.js';
import createPrimeGameConsitions from '../src/games/prime-number.js';

const userName = createWelcome();
createGame(userName, createPrimeGameConsitions());
