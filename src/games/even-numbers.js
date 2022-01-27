import { createNumber } from '../utilits.js';

const isParityNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');

const createEvenGameConsitions = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const expression = createNumber;
  const expectedAnswer = isParityNumber;
  const conditions = [gameRule, expression, expectedAnswer];
  return conditions;
};

export default createEvenGameConsitions;
