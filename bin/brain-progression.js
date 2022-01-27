#!/usr/bin/env node
import createWelcome from '../src/cli.js';
import createGame from '../src/index.js';
import createProgressionGameConsitions from '../src/games/progression.js';

const userName = createWelcome();
createGame(userName, createProgressionGameConsitions());
