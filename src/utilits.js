const baseMultiplier = 100;
const maxProgressionIndex = 5;

const createNumber = (multiplier) => Math.ceil((Math.random() * multiplier));
const createOperatorIndex = (length) => Math.round(Math.random() * (length - 1));

export {
  baseMultiplier, maxProgressionIndex, createNumber, createOperatorIndex,
};
