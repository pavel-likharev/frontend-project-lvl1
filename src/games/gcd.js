import { baseMultiplier, createNumber } from '../utilits.js';

const createNumberConsitions = () => {
  const expression = `${createNumber(baseMultiplier)} ${createNumber(baseMultiplier)}`;
  const separator = ' ';
  const numbers = expression.split(separator);
  const [first, second] = numbers;
  const firstNumber = Number(first);
  const secondNumber = Number(second);
  const minNumber = firstNumber >= secondNumber ? secondNumber : firstNumber;

  let expectedAnswer = 1;

  for (let i = minNumber; i >= 1; i -= 1) {
    console.log(i);
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      expectedAnswer = i;
      break;
    }
  }

  const numberConsitions = [expression, String(expectedAnswer)];

  return numberConsitions;
};

const createGcdGameConsitions = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const consitions = [gameRule, createNumberConsitions];

  return consitions;
};

export default createGcdGameConsitions;
