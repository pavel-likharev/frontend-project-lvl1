#!/usr/bin/env node
import createWelcome from '../src/cli.js';
import createEvenGame from '../src/even-numbers.js';

const userName = createWelcome();
createEvenGame(userName);
