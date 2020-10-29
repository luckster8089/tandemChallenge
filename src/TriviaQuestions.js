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
    const [score, setScore] = useState(0)
    const [question, setQuestion] = useState({
      questionName: '',
      answers: []
    })

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if (value === questions[questionNumber].correct) {
          setScore(currScore => currScore + 1)
        }
        setQuestionNumber(currQuestion => currQuestion + 1)
        setQuestion({questionName: questions[questionNumber].question, answers: questions[questionNumber].incorrect})
    }
    
    useEffect(() => {
      const question = questions[questionNumber].question
      const answers = questions[questionNumber].incorrect.concat(questions[questionNumber].correct)
      setQuestion({ questionName: question, answers: answers })
    }, [questionNumber, questions])


    return (
        <div>
            <h2>Your Score: {score}</h2>
            <h3>{question.questionName}</h3>
            <form onSubmit={handleSubmit}>
            <FormControl component="fieldset">
            <FormLabel component="legend">Select an Answer</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleChange}>
              {question.answers.map((q, index) => (
                <FormControlLabel key={index} value={q} control={<Radio />} label={q}/>
              ))}
            </RadioGroup>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
          </FormControl>
            </form>
        </div>
    )
}
