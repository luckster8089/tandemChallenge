import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import TriviaQuestions from './TriviaQuestions';
import styles from './styles/TriviaGameStyles';



function TriviaGame({ data, classes  }) {
    const newArr = [];
    while (newArr.length <= 9) {
      let rand = Math.floor(Math.random() * data.length)
      let randomQuestion = data[rand]
      if (newArr.indexOf(randomQuestion) === -1)newArr.push(randomQuestion)
    }

    return (
        <div className={classes.root}>
            <TriviaQuestions questions={newArr} />  
        </div>
    )
}

export default withStyles(styles)(TriviaGame);


