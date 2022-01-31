import { baseMultiplier, createNumber } from '../utilits.js';
import createWelcome from '../cli.js';
import createSomeGame from '../index.js';

const isSimpleNumber = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const createGameConsitions = () => {
  const expression = createNumber(baseMultiplier);
  const expectedAnswer = isSimpleNumber(expression);
  const numberConsitions = [expression, String(expectedAnswer)];

  return numberConsitions;
};

const createPrimeGameConsitions = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  createSomeGame(createWelcome, gameRule, createGameConsitions);
};

export default createPrimeGameConsitions;
