import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/TriviaAnswerCheckStyles';

function TriviaAnswerCheck({ open, handleClose, correctAnswer, selectedAnswer, isCorrect, classes }) {
    return (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-check-answer"
          aria-describedby="alert-dialog-check-answer"
        >
          <DialogTitle id="alert-dialog-title">
            {isCorrect ? 
            <h3 style={{ color: "green" }}> Smart you are, Young Padawan </h3> 
            : <h3 style={{ color: "red" }}> The greatest teacher, failure is </h3>
            }
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-answer-check">
              {isCorrect ? 
                "Pass on what you have learned" : 
                <div className={classes.wrongAnswer}>
                  You must unlearn what you have learned. 
                  You selected 
                  <span className={classes.wrongAnswerSelected}>
                    {selectedAnswer}
                  </span>
                  The correct answer is 
                    <span className={classes.wrongAnswerCorrect}> 
                      {correctAnswer}
                    </span>
                </div>
              }
            </DialogContentText>
          </DialogContent>
        </Dialog>
    );
  }

export default withStyles(styles)(TriviaAnswerCheck);