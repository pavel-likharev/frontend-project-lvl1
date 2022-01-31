import readlineSync from 'readline-sync';

const createSomeGame = (gameRule, createGameConsitions) => {
  const questionCount = 3;
  let i = 0;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  for (; i < questionCount; i += 1) {
    const numberConsitions = createGameConsitions();
    const [expression, expectedAnswer] = numberConsitions;

    console.log(`Question: ${expression}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== expectedAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
  }

  if (i === questionCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default createSomeGame;
