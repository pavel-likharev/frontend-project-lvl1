const minMultiplier = 1;
const maxMultiplier = 100;

const genereateRandomNumber = (min = minMultiplier, max = maxMultiplier) => {
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
};

export { minMultiplier, maxMultiplier, genereateRandomNumber };
