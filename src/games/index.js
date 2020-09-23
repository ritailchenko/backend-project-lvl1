// import readlineSync from 'readline-sync';

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

const startGame = (question, correctAnswer, yourAnswer) => {
  greeting();
  console.log('What is the result of the expression?');

  console.log(question);
  console.log(yourAnswer);

  let count = 0;

  while (count < 3) {
    if (correctAnswer === yourAnswer) {
      count += 1;
      console.log('Correct!');
    } else {
      count = 0;
      console.log('These is wrong answer. Lets try again!');
      break;
    }
  }
  if (count === 3) {
    console.log('Congratulations, you won!');
  }
};

export default startGame;
