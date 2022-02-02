import { genereateRandomNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParityNumber = (number) => number % 2 === 0;

const createGameConsitions = () => {
  const expression = genereateRandomNumber();
  const expectedAnswer = String(isParityNumber(expression) ? 'yes' : 'no');

  return [expression, expectedAnswer];
};

const createEvenGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createEvenGame;
