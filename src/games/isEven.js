import startGame from '../index.js'
import generateRandomNum from '../utils/generateRandom.js'

const isEven = (num) => {
  if (num % 2 === 0) {
    return true
  }
  return false
}
const questionToStart =
  'Answer `yes` if the number is even, otherwise answer `no`'
let correctAnswer
const generateQuestionAndCorrectAnswer = () => {
  const number = generateRandomNum(2, 11)

  const question = number

  if (isEven(number)) {
    correctAnswer = 'yes'
  } else {
    correctAnswer = 'no'
  }

  return {
    question,
    correctAnswer,
  }
}

export default () =>
  startGame(generateQuestionAndCorrectAnswer, questionToStart)
