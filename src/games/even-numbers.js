import { baseMultiplier, createNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const isParityNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');

const createGameConsitions = () => {
  const expression = createNumber(baseMultiplier);
  const expectedAnswer = isParityNumber(expression);
  const numberConsitions = [expression, String(expectedAnswer)];

  return numberConsitions;
};

const createEvenGame = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

  createSomeGame(gameRule, createGameConsitions);
};

export default createEvenGame;
