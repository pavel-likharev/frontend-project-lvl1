import { createNumber } from '../utilits.js';

const createExpression = () => {
  const expression = `${createNumber()} ${createNumber()}`;

  return expression;
};

const createExpectedAnswer = (expression) => {
  const separator = ' ';
  const numbers = expression.split(separator);
  const [first, second] = numbers;
  const firstNumber = Number(first);
  const secondNumber = Number(second);
  const minNumber = firstNumber >= secondNumber ? secondNumber : firstNumber;

  for (let i = minNumber; i >= 1; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      return String(i);
    }
  }

  return String(1);
};

const createGcdGameConsitions = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const expression = createExpression;
  const expectedAnswer = createExpectedAnswer;
  const conditions = [gameRule, expression, expectedAnswer];
  return conditions;
};

export default createGcdGameConsitions;
