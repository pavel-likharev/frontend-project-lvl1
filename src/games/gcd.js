import { minMultiplier, maxMultiplier, createNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const createGameConsitions = () => {
  const firstNumber = createNumber(minMultiplier, maxMultiplier);
  const secondNumber = createNumber(minMultiplier, maxMultiplier);
  const minNumber = firstNumber >= secondNumber ? secondNumber : firstNumber;

  let expectedAnswer = 1;

  for (let i = minNumber; i >= 1; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      expectedAnswer = i;
      break;
    }
  }

  const gameConsitions = [`${firstNumber} ${secondNumber}`, String(expectedAnswer)];

  return gameConsitions;
};

const createGcdGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createGcdGame;
