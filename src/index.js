import readlineSync from 'readline-sync';

const createSomeGame = (gameRule, createGameConsitions) => {
  const questionCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  for (let i = 0; i < questionCount; i += 1) {
    const numberConsitions = createGameConsitions();
    const [expression, expectedAnswer] = numberConsitions;

    console.log(`Question: ${expression}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== expectedAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default createSomeGame;
