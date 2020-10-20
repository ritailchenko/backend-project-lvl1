import readlineSync from 'readline-sync'
import _ from 'lodash'

const startGame = (generateTheGame, questionToStart) => {
  console.log('Welcome to the brain games!')

  const name = readlineSync.question('what is your name?')

  const nameCapitalized = _.upperFirst(name)

  console.log(`Hi, ${nameCapitalized}!`)
  console.log(questionToStart)
  let scoreOfTheGame = 0

  while (scoreOfTheGame < 3) {
    const { question, correctAnswer } = generateTheGame()

    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')

    if (correctAnswer.toString() === userAnswer) {
      scoreOfTheGame += 1
      console.log('Correct!')
    } else {
      console.log(
        `${userAnswer} these is wrong answer. Correct answer is ${correctAnswer}. Lets try again ${nameCapitalized}!`,
      )
      break
    }
  }
  const isGameOver = (score) => {
    if (score === 3) {
      console.log(`Congratulations, ${nameCapitalized} you won!`)
    }
  }
  isGameOver(scoreOfTheGame)
}

export default startGame
