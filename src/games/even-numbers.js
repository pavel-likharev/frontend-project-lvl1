import { baseMultiplier, createNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParityNumber = (number) => number % 2 === 0;

const createGameConsitions = () => {
  const expression = createNumber(baseMultiplier);
  const expectedAnswer = isParityNumber(expression) ? 'yes' : 'no';
  const numberConsitions = [expression, String(expectedAnswer)];

  return numberConsitions;
};

const createEvenGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createEvenGame;
