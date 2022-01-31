import { minMultiplier, maxMultiplier, createNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParityNumber = (number) => number % 2 === 0;

const createGameConsitions = () => {
  const expression = createNumber(minMultiplier, maxMultiplier);
  const expectedAnswer = isParityNumber(expression) ? 'yes' : 'no';
  const gameConsitions = [expression, String(expectedAnswer)];

  return gameConsitions;
};

const createEvenGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createEvenGame;
