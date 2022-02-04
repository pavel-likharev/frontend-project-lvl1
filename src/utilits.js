const genereateRandomNumber = (min = 1, max = 100) => {
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
};

export default genereateRandomNumber;
