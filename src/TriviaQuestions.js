import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styles from './styles/TriviaQuestionsStyles.js'


function TriviaQuestions({ questions, classes }) {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [value, setValue] = useState('')
    const [score, setScore] = useState(0)
    const [error, setError] = useState(false)
    const [question, setQuestion] = useState({
      questionName: '',
      answers: []
    })
    const [end, setEnd] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if (value === questions[questionNumber].correct) {
          setScore(currScore => currScore + 1);
          setError(false);
          setQuestionNumber(currQuestion => currQuestion + 1)
          setQuestion({questionName: questions[questionNumber].question, answers: questions[questionNumber].incorrect})
        } else if (value !== questions[questionNumber].correct) {
          setError(true);
        } 
    }
    
    useEffect(() => {
      if (questionNumber > 9) {
        setEnd(`You Scored ${score} out of ${questionNumber}`)
        return 
      } // Base Case
      const question = questions[questionNumber].question
      const answers = questions[questionNumber].incorrect.concat(questions[questionNumber].correct)
      setQuestion({ questionName: question, answers: answers })
    }, [questionNumber, questions])


    return (
        <div className={classes.root}>
            <h3>You've Completed {questionNumber} / 10 Questions</h3>
            <h3>Your Score: {score}</h3>
            <div className={classes.questionContainer}>
              <h3>{question.questionName}</h3>
              <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" error={error}>
                <FormLabel component="legend">Select an Answer</FormLabel>
                <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleChange}>
                  {question.answers.map((q, index) => (
                    <FormControlLabel key={index} value={q} control={<Radio />} label={q}/>
                  ))}
                </RadioGroup>
                <div className={classes.buttonContainer}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </div>
                </FormControl>
              </form>
            </div>
            {end}
        </div>
    )
}

export default withStyles(styles)(TriviaQuestions)
