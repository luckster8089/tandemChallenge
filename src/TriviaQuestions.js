import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TriviaAnswerCheck from './TriviaAnswerCheck';
import TriviaAnswerForm from './TriviaAnswerForm';
import TriviaEnd from './TriviaEnd';
import styles from './styles/TriviaQuestionsStyles.js'

// Move score to App
// Pass score down to ending component
// if question number > questions.length history push to new component
// pass score to component from app 
// deliver ending message

function TriviaQuestions({ questions, classes, gameDone }) {
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

    const history = useHistory();

    useEffect(() => {
      if (questions[questionNumber] === undefined) {
        return <TriviaEnd score={score} questions={questions.length} /> 
      }
      const question = questions[questionNumber].question
      const answers = questions[questionNumber].incorrect.concat(questions[questionNumber].correct)
      setQuestion({ questionName: question, answers: answers })
    }, [questionNumber, questions, score, history])

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

    if (questions[questionNumber] === undefined) {
        return <TriviaEnd score={score} questions={questions.length}/> 
    }

    return (
        <div className={classes.root}>
            <h2>Welcome to Tandem Trivia!</h2>
            <h3>You've Completed {questionNumber} / 10 Questions</h3>
            <h3>Your Score: {score}</h3>
            <div className={classes.questionContainer}>
            <TriviaAnswerForm handleSubmit={handleSubmit} question={question} error={error} value={value} handleChange={handleChange} />
            <TriviaAnswerCheck 
              open={open} 
              handleClose={handleClose} 
              selectedAnswer={value} 
              correctAnswer={questions[questionNumber].correct} 
              isCorrect={isCorrect}
              questionNumber={questionNumber}
            /> 
            </div>
        </div>
    )
}

export default withStyles(styles)(TriviaQuestions)
