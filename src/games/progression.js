import startGame from '../index.js'
import generateRandomNumFromRange from '../utils/generateRandom.js'

const questionToStart = 'What number is missing in the progression?'

const generateQuestionAndCorrectAnswer = () => {
  const numberToStartProgression = generateRandomNumFromRange(10)
  let stepInProgression = generateRandomNumFromRange(10)
  const progression = []
  const generateProgression = () => {
    for (let i = numberToStartProgression; i <= 100; i += stepInProgression) {
      if (stepInProgression === 1 || stepInProgression === 0) {
        stepInProgression += 2
      }
      progression.push(i)
      if (progression.length >= 10) {
        break
      }
    }
    return progression
  }

  const question = generateProgression()

  const indexOfMissingNumber = generateRandomNumFromRange(10)

  const correctAnswer = question[indexOfMissingNumber]

  question[indexOfMissingNumber] = '..'

  return {
    question,
    correctAnswer,
  }
}

export default () =>
  startGame(generateQuestionAndCorrectAnswer, questionToStart)
