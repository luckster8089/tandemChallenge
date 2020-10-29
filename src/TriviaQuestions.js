import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function TriviaQuestions({ questions }) {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [value, setValue] = useState('')
    const [question, setQuestion] = useState({
      questionName: '',
      answers: []
    })

    function handleChange(e) {
        setValue(e.target.value)
    }


    function incrementQuestionCount() {
      setQuestionNumber(currQuestion => currQuestion + 1)
      setQuestion({questionName: questions[questionNumber].question, answers: questions[questionNumber].incorrect})
    }
    
    useEffect(() => {
      const question = questions[questionNumber].question
      const answers = questions[questionNumber].incorrect.concat(questions[questionNumber].correct)
      setQuestion({questionName: question, answers: answers})
    }, [questionNumber])


    return (
        <div>
            <h3>{question.questionName}</h3>
            <form onSubmit={handleSubmit}>
            <FormControl component="fieldset">
            <FormLabel component="legend">Select an Answer</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              {question.answers.map((q) => (
                <FormControlLabel value={q} control={<Radio />} label={q}/>
              ))}
            </RadioGroup>
            <Button type="submit" variant="contained" color="primary" onClick={incrementQuestionCount}>
                Submit
            </Button>
          </FormControl>
            </form>
        </div>
    )
}
