import { genereateRandomNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isSimpleNumber = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const createGameConsitions = () => {
  const expression = genereateRandomNumber();
  const expectedAnswer = String(isSimpleNumber(expression));

  return [expression, expectedAnswer];
};

const createPrimeGameConsitions = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createPrimeGameConsitions;
