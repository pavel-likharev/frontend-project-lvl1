import { baseMultiplier, createNumber, createOperatorIndex } from '../utilits.js';

const operators = ['+', '-', '*'];

const createNumberConsitions = () => {
  const expression = `${createNumber(baseMultiplier)} ${operators[createOperatorIndex(operators.length)]} ${createNumber(baseMultiplier)}`;
  const separator = ' ';
  const expressionSymbols = expression.split(separator);
  const [first, operator, second] = expressionSymbols;
  const firstNumber = Number(first);
  const secondNumber = Number(second);

  let expectedAnswer;

  switch (operator) {
    case '+':
      expectedAnswer = firstNumber + secondNumber;
      break;
    case '-':
      expectedAnswer = firstNumber - secondNumber;
      break;
    case '*':
      expectedAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }

  const numberConsitions = [expression, String(expectedAnswer)];

  return numberConsitions;
};

const createCalcGameConsitions = () => {
  const gameRule = 'What is the result of the expression?';
  const consitions = [gameRule, createNumberConsitions];

  return consitions;
};

export default createCalcGameConsitions;
