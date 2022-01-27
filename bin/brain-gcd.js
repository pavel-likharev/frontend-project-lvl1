#!/usr/bin/env node
import createWelcome from '../src/cli.js';
import createGame from '../src/index.js';
import createGcdGameConsitions from '../src/games/gcd.js';

const userName = createWelcome();
createGame(userName, createGcdGameConsitions());
