import React, { useState, useEffect, useMemo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TriviaAnswerCheck from './TriviaAnswerCheck';
import TriviaAnswerForm from './TriviaAnswerForm';
import TriviaEnd from './TriviaEnd';
import styles from './styles/TriviaQuestionsStyles.js'

// Shuffle Answers
function shuffle(arr) {
  let currentIndex = arr.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1;

    temporaryValue = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = temporaryValue
  }
  return arr;
}

// Main Function Component
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



    useEffect(() => {
      if (questions[questionNumber] === undefined) {
        return <TriviaEnd score={score} questions={questions.length} /> 
      }
      const question = questions[questionNumber].question
      const answers = questions[questionNumber].incorrect.concat(questions[questionNumber].correct)
      setQuestion({ questionName: question, answers: answers })
    }, [questionNumber, questions])

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
        } else if (value === ""){
          setIsCorrect(false)
          setError(true)
        } else {
          setIsCorrect(false)
          setOpen(true)
          setError(false)
        } 
    }


    function handleClose(e) {
      setOpen(false)
      setQuestionNumber(currQuestion => currQuestion + 1)
      setValue("")
      setQuestion({questionName: questions[questionNumber].question, answers: questions[questionNumber].incorrect})
    }

    const randomAnswers = useMemo(() => shuffle(question.answers), [question.answers, shuffle])

    if (questions[questionNumber] === undefined) {
        return <TriviaEnd score={score} questions={questions.length}/> 
    }

    return (
        <div className={classes.root}>
            <h2>Welcome to Tandem Trivia!</h2>
            <h3>You've Completed {questionNumber} / 10 Questions</h3>
            <h3>Your Score: {score}</h3>
            <div className={classes.questionContainer}>
            <TriviaAnswerForm handleSubmit={handleSubmit} question={question} answers={randomAnswers} error={error} value={value} handleChange={handleChange} />
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
