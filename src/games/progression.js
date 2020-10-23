import startGame from '../index.js'
import generateRandomNumFromRange from '../utils/generateRandom.js'

const questionToStart = 'What number is missing in the progression?'

const generateProgression = () => {
  const numberToStartProgression = generateRandomNumFromRange(2, 11)
  const stepInProgression = generateRandomNumFromRange(2, 11)
  const progression = []
  for (
    let i = numberToStartProgression;
    progression.length < 10;
    i += stepInProgression
  ) {
    progression.push(i)
  }
  return progression
}
const generateQuestionAndCorrectAnswer = () => {
  const question = generateProgression()

  const indexOfMissingNumber = generateRandomNumFromRange(0, 10)

  const correctAnswer = question[indexOfMissingNumber]

  question[indexOfMissingNumber] = '..'

  return {
    question,
    correctAnswer,
  }
}

export default () =>
  startGame(generateQuestionAndCorrectAnswer, questionToStart)
