import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TriviaAnswerCheck from './TriviaAnswerCheck';
import TriviaAnswerForm from './TriviaAnswerForm';
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
    const [open, setOpen] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (value === questions[questionNumber].correct) {
          setIsCorrect(true)
          setOpen(true)
          setError(false)
          setScore(currScore => currScore + 1);
          setQuestionNumber(currQuestion => currQuestion + 1)
          setQuestion({questionName: questions[questionNumber].question, answers: questions[questionNumber].incorrect})
        } else if (value === ""){
          setIsCorrect(false)
          setError(true)
        } else {
          setIsCorrect(false)
          setOpen(true)
          setError(false)
          setQuestionNumber(currQuestion => currQuestion + 1)
          setQuestion({questionName: questions[questionNumber].question, answers: questions[questionNumber].incorrect})
        } 
    }

    function handleClose(e) {
      setOpen(false)
      setValue("")
    }
    
    useEffect(() => {
      if (questionNumber > 9) {
        // TODO create ending 
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

            <TriviaAnswerForm handleSubmit={handleSubmit} question={question} error={error} value={value} handleChange={handleChange} />
              {/* <form onSubmit={handleSubmit}>
            <Card className={classes.cardRoot} variant="outlined">
              <CardContent>
                <Typography className={classes.cardTitle} color="textPrimary" gutterBottom>
                {question.questionName}
                </Typography>
                <Typography className={classes.cardAnswers} color="textSecondary">
                  <FormControl component="fieldset" error={error}>
                  <FormLabel component="legend">Select an Answer</FormLabel>
                  <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleChange}>
                    {question.answers.map((q, index) => (
                      <FormControlLabel key={index} value={q} control={<Radio />} label={q}/>
                    ))}
                  </RadioGroup>
                  </FormControl>
              </Typography>
              </CardContent>
            </Card>
            <div className={classes.buttonContainer}>
              <Button type="submit" className={classes.button} variant="contained" color="primary">
                Submit
              </Button>
            </div>
            </form> */}
            <TriviaAnswerCheck 
              open={open} 
              handleClose={handleClose} 
              selectedAnswer={value} 
              correctAnswer={questions[questionNumber].correct} 
              isCorrect={isCorrect}
            />
            </div>
        </div>
    )
}

export default withStyles(styles)(TriviaQuestions)
