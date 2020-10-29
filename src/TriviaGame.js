import React from 'react';
import { withStyles } from '@material-ui/styles';
import TriviaQuestions from './TriviaQuestions';

const styles = {
  root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
  }
}

function TriviaGame({ data, classes }) {
    const newArr = [];
    while (newArr.length <= 9) {
      let rand = Math.floor(Math.random() * data.length)
      let randomQuestion = data[rand]
      if (newArr.indexOf(randomQuestion) === -1)newArr.push(randomQuestion)
    }

    return (
        <div className={classes.root}>
            <h2>Welcome to Tandem Trivia!</h2>
            <TriviaQuestions questions={newArr} />
        </div>
    )
}

export default withStyles(styles)(TriviaGame);


