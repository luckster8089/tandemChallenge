import React from 'react'
import Button from '@material-ui/core/Button'
import TriviaGame from './TriviaGame'

export default function Trivia({ questions, answers, incorrectAnswers }) {
    return (
        <div>
            <h2>Are You Ready For Tandem Trivia?</h2>
            <Button variant="contained" color="primary">
                Yes
            </Button>
            <Button variant="contained" color="secondary">
                No
            </Button>
        </div>
    )
}
