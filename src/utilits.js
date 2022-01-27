const multiplier = 100;

const createNumber = () => Math.round((Math.random() * multiplier));
const createOperatorIndex = (length) => Math.round(Math.random() * (length - 1));

export { createNumber, createOperatorIndex };
