import genereateRandomNumber from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isSimpleNumber = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const createGameConsitions = () => {
  const expression = genereateRandomNumber();
  const expectedAnswer = isSimpleNumber(expression) ? 'yes' : 'no';

  return [expression, expectedAnswer];
};

const createPrimeGameConsitions = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createPrimeGameConsitions;
