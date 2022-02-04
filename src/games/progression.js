import genereateRandomNumber from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'What number is missing in the progression?';
const minProsressionIndex = 1;
const maxProgressionIndex = 5;
const minProsressionLength = 6;
const maxProsressionLength = 10;

const createProgressionFromNumber = (startNumber, progressionIndex, progressionLength) => {
  const progressionOfNumbers = [startNumber];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progressionOfNumbers.push(progressionOfNumbers[i] + progressionIndex);
  }

  return progressionOfNumbers;
};

const createGameConsitions = () => {
  const startNumber = genereateRandomNumber();
  const progressionIndex = genereateRandomNumber(minProsressionIndex, maxProgressionIndex);
  const progressionLength = genereateRandomNumber(minProsressionLength, maxProsressionLength);

  const lineNumbers = createProgressionFromNumber(startNumber, progressionIndex, progressionLength);
  const hiddenNumberIndex = genereateRandomNumber(0, lineNumbers.length - 1);
  const hiddenNumber = lineNumbers[hiddenNumberIndex];
  lineNumbers[hiddenNumberIndex] = '..';

  const expression = lineNumbers.join(' ');
  const expectedAnswer = String(hiddenNumber);

  return [expression, expectedAnswer];
};

const createProgressionGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createProgressionGame;
