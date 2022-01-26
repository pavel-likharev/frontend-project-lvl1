import readlineSync from 'readline-sync';

const multiplier = 100;

const createNumber = () => Math.round((Math.random() * multiplier));
const createQuestion = (number) => {
  console.log(`Question: ${number}`);
};
const createEvenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const questionCount = 3;
  let i = 0;

  for (; i < questionCount; i += 1) {
    const number = createNumber();
    const parityNumber = number % 2 === 0 ? 'yes' : 'no';
    createQuestion(number);
    const answer = readlineSync.question('Answer: ');

    if (answer !== parityNumber) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${parityNumber}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
    }
  }

  if (i === questionCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default createEvenGame;
