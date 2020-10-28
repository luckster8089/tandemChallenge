import React from 'react'
import Button from '@material-ui/core/Button'
import TriviaGame from './TriviaGame'

export default function Trivia({ data }) {
    const triviaGame = data.map(questions => (
        <TriviaGame
          questions={questions.questions}
          answers={questions.correct}
          incorrectAnswers={questions.incorrect}
        />
      ))

    return (
        <div>
            <h2>Are You Ready For Tandem Trivia?</h2>
            <Button variant="contained" color="primary" onClick={() => {triviaGame}}>
                Yes
            </Button>
            <Button variant="contained" color="secondary">
                No
            </Button>
        </div>
    )
}
