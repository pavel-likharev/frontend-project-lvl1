import { genereateRandomNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const searchCommonDivisor = (firstNumber, secondNumber) => {
  const minNumber = firstNumber >= secondNumber ? secondNumber : firstNumber;

  let expectedAnswer = 1;

  for (let i = minNumber; i >= 1; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      expectedAnswer = i;
      break;
    }
  }

  return expectedAnswer;
};

const createGameConsitions = () => {
  const firstNumber = genereateRandomNumber();
  const secondNumber = genereateRandomNumber();

  const expression = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = String(searchCommonDivisor(firstNumber, secondNumber));

  return [expression, expectedAnswer];
};

const createGcdGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createGcdGame;
