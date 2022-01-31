import { baseMultiplier, createNumber } from '../utilits.js';
import createWelcome from '../cli.js';
import createSomeGame from '../index.js';

const createGameConsitions = () => {
  const expression = `${createNumber(baseMultiplier)} ${createNumber(baseMultiplier)}`;
  const separator = ' ';
  const numbers = expression.split(separator);
  const [first, second] = numbers;
  const firstNumber = Number(first);
  const secondNumber = Number(second);
  const minNumber = firstNumber >= secondNumber ? secondNumber : firstNumber;

  let expectedAnswer = 1;

  for (let i = minNumber; i >= 1; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      expectedAnswer = i;
      break;
    }
  }

  const numberConsitions = [expression, String(expectedAnswer)];

  return numberConsitions;
};

const createGcdGame = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';

  createSomeGame(createWelcome, gameRule, createGameConsitions);
};

export default createGcdGame;
