import { baseMultiplier, createNumber, createOperatorIndex } from '../utilits.js';
import createSomeGame from '../index.js';

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
  const firstNumber = createNumber(baseMultiplier);
  const secondNumber = createNumber(baseMultiplier);
  const operator = operators[createOperatorIndex(operators.length)];

  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  const expectedAnswer = calcNumbers(firstNumber, secondNumber, operator);

  const numberConsitions = [expression, String(expectedAnswer)];

  return numberConsitions;
};

const createCalcGame = () => {
  const gameRule = 'What is the result of the expression?';

  createSomeGame(gameRule, createGameConsitions);
};

export default createCalcGame;
