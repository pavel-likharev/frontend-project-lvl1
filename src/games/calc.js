import { genereateRandomNumber } from '../utilits.js';
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
  const firstNumber = genereateRandomNumber();
  const secondNumber = genereateRandomNumber();
  const operator = operators[genereateRandomNumber(0, (operators.length - 1))];

  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  const expectedAnswer = calcNumbers(firstNumber, secondNumber, operator);

  const gameConsitions = [expression, String(expectedAnswer)];

  return gameConsitions;
};

const createCalcGame = () => {
  createSomeGame(gameRule, createGameConsitions);
};

export default createCalcGame;
