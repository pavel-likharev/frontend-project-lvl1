import { baseMultiplier, maxProgressionIndex, createNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 9;

const createLineNumbers = () => {
  const startNumber = createNumber(baseMultiplier);
  const progressionIndex = createNumber(maxProgressionIndex);
  let currentNumber = startNumber;
  const lineNumbers = [startNumber];

  for (let i = 0; i <= progressionLength; i += 1) {
    currentNumber += progressionIndex;
    lineNumbers.push(currentNumber);
  }

  return lineNumbers;
};

const createGameConsitions = () => {
  const separator = ' ';
  const lineNumbers = createLineNumbers();
  const hiddenNumberIndex = createNumber(progressionLength);
  const hiddenNumber = lineNumbers[hiddenNumberIndex];
  lineNumbers[hiddenNumberIndex] = '..';

  const expression = lineNumbers.join(separator);
  const expectedAnswer = String(hiddenNumber);

  const numberConsitions = [expression, expectedAnswer];

  return numberConsitions;
};

const createProgressionGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createProgressionGame;
