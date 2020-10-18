import startGame from '../index.js'
import generateRandomNum from '../utils/generateRandom.js'

const questionToStart = 'What number is missing in the progression?'

const generateQuestionAndCorrectAnswer = () => {
    const progressions = [
        [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
        [1, 4, 9, 16, 25, 36, 47, 64, 81, 100],
    ]
    const mathRandomForProgression = generateRandomNum(3)

    const question = progressions[mathRandomForProgression]

    const excludedNum = generateRandomNum(9)
    const correctAnswer = question[excludedNum]
    const index = question.indexOf(correctAnswer)

    question[index] = '..'

    return {
        question,
        correctAnswer,
    }
}

export default () =>
    startGame(generateQuestionAndCorrectAnswer, questionToStart)
