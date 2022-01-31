import { baseMultiplier, createNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const createGameConsitions = () => {
  const firstNumber = createNumber(baseMultiplier);
  const secondNumber = createNumber(baseMultiplier);
  const minNumber = firstNumber >= secondNumber ? secondNumber : firstNumber;

  let expectedAnswer = 1;

  for (let i = minNumber; i >= 1; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      expectedAnswer = i;
      break;
    }
  }

  const numberConsitions = [`${firstNumber} ${secondNumber}`, String(expectedAnswer)];

  return numberConsitions;
};

const createGcdGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createGcdGame;
