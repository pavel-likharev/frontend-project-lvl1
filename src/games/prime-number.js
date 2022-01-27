import { baseMultiplier, createNumber } from '../utilits.js';

const isSimpleNumber = (number) => {
  const dividers = [1];

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }

  if (dividers.length === 1) {
    return 'yes';
  }

  return 'no';
};

const createNumberConsitions = () => {
  const expression = createNumber(baseMultiplier);
  const expectedAnswer = isSimpleNumber(expression);
  const numberConsitions = [expression, String(expectedAnswer)];

  return numberConsitions;
};

const createPrimeGameConsitions = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const consitions = [gameRule, createNumberConsitions];

  return consitions;
};

export default createPrimeGameConsitions;
