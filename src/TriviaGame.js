import React, {useState} from 'react';
import TriviaQuestions from './TriviaQuestions';
import Button from '@material-ui/core/Button';

export default function TriviaGame({ data }) {
    const [questionNumber, setQuestionNumber] = useState(0)

    const newArr = [];
    while (newArr.length <= 9) {
      let rand = Math.floor(Math.random() * data.length)
      let randomQuestion = data[rand]
      if (newArr.indexOf(randomQuestion) === -1)newArr.push(randomQuestion)
    }

    console.log(newArr[0].question)

    const questions = newArr.map((question, index) => (
      <TriviaQuestions
        key={question.question}
        question={question.question}
        answers={question.correct}
        incorrect={question.incorrect}
      />
    ))

    function incrementQuestionCount() {
      setQuestionNumber(currQuestion => currQuestion + 1)
    }

    return (
        <div>
            <h3>Welcome to Tandem Trivia!</h3>
            {questions[questionNumber]}
            <Button variant="contained" color="primary" onClick={incrementQuestionCount}>
            Submit
            </Button>
        </div>
    )
}


