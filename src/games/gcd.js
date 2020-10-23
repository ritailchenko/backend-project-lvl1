import startGame from '../index.js'
import generateRandomNum from '../utils/generateRandom.js'

const getBiggestGcd = (num1, num2) => {
  if (!num2) {
    return num1
  }
  return getBiggestGcd(num2, num1 % num2)
}

const questionToStart = 'Find the greatest common divisor of given numbers.'

const generateQuestionAndCorrectAnswer = () => {
  const firstNumber = generateRandomNum(2, 101)
  const secondNumber = generateRandomNum(2, 101)

  const question = `${firstNumber} ${secondNumber}`

  const correctAnswer = getBiggestGcd(firstNumber, secondNumber)

  return {
    question,
    correctAnswer,
  }
}

export default () =>
  startGame(generateQuestionAndCorrectAnswer, questionToStart)
