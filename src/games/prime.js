import startGame from '../index.js'
import generateRandomNum from '../utils/generateRandom.js'

const isPrime = (num) => {
  if (num === 1 || num === 0) {
    return false
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

// eslint-disable-next-line operator-linebreak
const questionToStart = 'Answer "yes" if given number is prime. Otherwise answer "no".'

let correctAnswer

const generateQuestionAndCorrectAnswer = () => {
  const randomNum = generateRandomNum(100)

  const question = randomNum

  if (isPrime(randomNum)) {
    correctAnswer = 'yes'
  } else {
    correctAnswer = 'no'
  }

  return {
    question,
    correctAnswer,
  }
}

export default () => startGame(generateQuestionAndCorrectAnswer, questionToStart)
