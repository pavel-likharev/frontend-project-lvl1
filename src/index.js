import readlineSync from 'readline-sync';

const createGame = (userName, gameСonditions) => {
  const [gameRule, createExpression, createExpectedAnswer] = gameСonditions;
  const questionCount = 3;
  let i = 0;

  console.log(gameRule);

  for (; i < questionCount; i += 1) {
    const expression = createExpression();
    const expectedAnswer = createExpectedAnswer(expression);

    console.log(`Question: ${expression}`);

    const answer = readlineSync.question('Answer: ');

    if (answer !== expectedAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
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

export default createGame;
