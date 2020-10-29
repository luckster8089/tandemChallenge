import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function TriviaAnswerCheck({ open, handleClose, correctAnswer, selectedAnswer,isCorrect }) {
    return (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-check-answer"
          aria-describedby="alert-dialog-check-answer"
        >
          <DialogTitle id="alert-dialog-title">
            {isCorrect ? "Smart you are, Young Padawan" : "The greatest teacher, failure is"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {isCorrect ? 
                "Pass on what you have learned" : 
                `You must unlearn what you have learned. You selected ${selectedAnswer}. The correct answer is ${correctAnswer}`
              }
            </DialogContentText>
          </DialogContent>
        </Dialog>
    );
  }