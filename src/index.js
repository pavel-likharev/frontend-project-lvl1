import readlineSync from 'readline-sync';

const createGame = (userName, gameСonditions) => {
  const [gameRule, createNumberConsitions] = gameСonditions;
  const questionCount = 3;
  let i = 0;

  console.log(gameRule);

  for (; i < questionCount; i += 1) {
    const numberConsitions = createNumberConsitions();
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

export default createGame;
