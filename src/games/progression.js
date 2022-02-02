import { genereateRandomNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'What number is missing in the progression?';
const minProsressionIndex = 1;
const maxProgressionIndex = 5;

const createProgressionFromNumber = (startNumber, progressionIndex) => {
  const progressionLength = 9;
  const progressionOfNumbers = [startNumber];

  let currentNumber = startNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    currentNumber += progressionIndex;
    progressionOfNumbers.push(currentNumber);
  }

  return progressionOfNumbers;
};

const createGameConsitions = () => {
  const separator = ' ';
  const startNumber = genereateRandomNumber();
  const progressionIndex = genereateRandomNumber(minProsressionIndex, maxProgressionIndex);

  const lineNumbers = createProgressionFromNumber(startNumber, progressionIndex);
  const hiddenNumberIndex = genereateRandomNumber(0, lineNumbers.length - 1);
  const hiddenNumber = lineNumbers[hiddenNumberIndex];
  lineNumbers[hiddenNumberIndex] = '..';

  const expression = lineNumbers.join(separator);
  const expectedAnswer = String(hiddenNumber);

  return [expression, expectedAnswer];
};

const createProgressionGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createProgressionGame;
