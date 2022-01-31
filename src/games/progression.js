import { minMultiplier, maxMultiplier, createNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 9;
const minProsressionIndex = 1;
const maxProgressionIndex = 5;

const createLineNumbers = () => {
  const startNumber = createNumber(minMultiplier, maxMultiplier);
  const progressionIndex = createNumber(minProsressionIndex, maxProgressionIndex);
  let currentNumber = startNumber;
  const lineNumbers = [startNumber];

  for (let i = 0; i < progressionLength; i += 1) {
    currentNumber += progressionIndex;
    lineNumbers.push(currentNumber);
  }

  return lineNumbers;
};

const createGameConsitions = () => {
  const separator = ' ';
  const lineNumbers = createLineNumbers();
  const hiddenNumberIndex = createNumber(0, progressionLength - 1);
  const hiddenNumber = lineNumbers[hiddenNumberIndex];
  lineNumbers[hiddenNumberIndex] = '..';

  const expression = lineNumbers.join(separator);
  const expectedAnswer = String(hiddenNumber);

  const gameConsitions = [expression, expectedAnswer];

  return gameConsitions;
};

const createProgressionGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createProgressionGame;
