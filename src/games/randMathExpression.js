import startGame from '../index.js'
import generateRandomNum from '../utils/generateRandom.js'

const generateArithmeticOperation = (
  randomMathOperation,
  randomNumOne,
  randomNumTwo,
) => {
  switch (randomMathOperation) {
    case '*':
      return randomNumOne * randomNumTwo
    case '+':
      return randomNumOne + randomNumTwo
    case '-':
      return randomNumOne - randomNumTwo
    default:
      throw new Error(`Unknown operation: '${randomMathOperation}'!`)
  }
}
const questionToStart = 'What is the result of the expression?'
const mathOperations = ['*', '+', '-']
const generateQuestionAndCorrectAnswer = () => {
  const firstNumber = generateRandomNum(2, 101)
  const secondNumber = generateRandomNum(2, 10)
  // eslint-disable-next-line operator-linebreak
  const randMathOperation = mathOperations[generateRandomNum(0, 3)]

  const question = `${firstNumber} ${randMathOperation} ${secondNumber}`
  const correctAnswer = generateArithmeticOperation(
    randMathOperation,
    firstNumber,
    secondNumber,
  )

  return {
    question,
    correctAnswer,
  }
}

export default () =>
  startGame(generateQuestionAndCorrectAnswer, questionToStart)
