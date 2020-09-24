import readlineSync from 'readline-sync';

// export default (question, answer) => {
// question = how many 1 + 1
// answer = 2
/*
 * 1) Поприветствовать
 * 2) Задать вопрос
 * 3) Получить ответ
 * 4) Сравнить правильный ответ и ответ пользователя
 * 5) Повторить
 */
// };
import greeting from './cli.js';

const startGame = (func, correctAnswer) => {
  greeting();
  console.log('What is the result of the expression?');
  let count = 0;
  // while (count < 3) {
  for (let i = 0; i < 3; i++) {
    console.log(func());

    console.log(correctAnswer);
  }
  // const askQestion = readlineSync.question(question);

  // console.log(askQestion);
  // const yourAnswer = parseInt(readlineSync.question('Your answer: '), 10);
  // // console.log(yourAnswer);
  // // console.log(correctAnswer);

  // if (correctAnswer === yourAnswer) {
  //   count += 1;
  //   console.log('Correct!');
  // } else {
  //   count = 0;
  //   console.log('These is wrong answer. Lets try again!');
  //   break;
  // }
  // }
  if (count === 3) {
    console.log('Congratulations, you won!');
  }
};

export default startGame;
