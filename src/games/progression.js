import startGame from '../index.js'
import generateRandomNumFromRange from '../utils/generateRandom.js'

const questionToStart = 'What number is missing in the progression?'

const generateQuestionAndCorrectAnswer = () => {
  const progressions = [
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
    [1, 4, 9, 16, 25, 36, 47, 64, 81, 100],
  ]
  const randomProgression = generateRandomNumFromRange(3)

  const question = progressions[randomProgression]

  const indexOfMissingNumber = generateRandomNumFromRange(10)

  const correctAnswer = question[indexOfMissingNumber]

  question[indexOfMissingNumber] = '..'

  return {
    question,
    correctAnswer,
  }
}
generateRandomNumFromRange()

export default () =>
  startGame(generateQuestionAndCorrectAnswer, questionToStart)
