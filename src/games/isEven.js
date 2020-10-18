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
  const randNum = generateRandomNum(100)

  const question = randNum

  if (isEven(randNum)) {
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
