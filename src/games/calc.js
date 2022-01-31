import { minMultiplier, maxMultiplier, createNumber } from '../utilits.js';
import createSomeGame from '../index.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calcNumbers = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return '';
  }
};

const createGameConsitions = () => {
  const firstNumber = createNumber(minMultiplier, maxMultiplier);
  const secondNumber = createNumber(minMultiplier, maxMultiplier);
  const operator = operators[createNumber(0, (operators.length - 1))];

  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  const expectedAnswer = calcNumbers(firstNumber, secondNumber, operator);

  const gameConsitions = [expression, String(expectedAnswer)];

  return gameConsitions;
};

const createCalcGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createCalcGame;
