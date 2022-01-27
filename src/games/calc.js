import { createNumber, createOperatorIndex } from '../utilits.js';

const operators = ['+', '-', '*'];

const createExpression = () => {
  const expression = `${createNumber()} ${operators[createOperatorIndex(operators.length)]} ${createNumber()}`;

  return expression;
};

const createExpectedAnswer = (expression) => {
  const separator = ' ';
  const expressionSymbols = expression.split(separator);
  const [first, operator, second] = expressionSymbols;
  const firstNumber = Number(first);
  const secondNumber = Number(second);

  let result;

  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      break;
  }

  return String(result);
};

const createCalcGameConsitions = () => {
  const gameRule = 'What is the result of the expression?';
  const expression = createExpression;
  const expectedAnswer = createExpectedAnswer;
  const conditions = [gameRule, expression, expectedAnswer];
  return conditions;
};

export default createCalcGameConsitions;
