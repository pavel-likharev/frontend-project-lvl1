import readlineSync from 'readline-sync';

const questionCount = 3;

const createSomeGame = (gameRule, createGameConsitions) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  for (let i = 0; i < questionCount; i += 1) {
    const [expression, expectedAnswer] = createGameConsitions();

    console.log(`Question: ${expression}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== expectedAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default createSomeGame;
