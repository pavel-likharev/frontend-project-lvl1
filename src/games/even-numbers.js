import { baseMultiplier, createNumber } from '../utilits.js';

const isParityNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');

const createNumberConsitions = () => {
  const expression = createNumber(baseMultiplier);
  const expectedAnswer = isParityNumber(expression);
  const numberConsitions = [expression, String(expectedAnswer)];

  return numberConsitions;
};

const createEvenGameConsitions = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const consitions = [gameRule, createNumberConsitions];

  return consitions;
};

export default createEvenGameConsitions;
