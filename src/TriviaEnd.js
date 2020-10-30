import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  },
  buttonContainer: {
    width: "12.5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "-.75rem"
  },
  button: {
    width: "50%",
    margin: ".5rem",
    borderRadius: ".8rem",
  }
}

function Ending({ score, classes, questions }) {
  return (
    <div className={classes.root}>
        <h2>Thank you for playing Tandem Trivia!</h2>
        <h4>You scored {score}/{questions}</h4>
        <h4>Play Again?</h4>
        <div className={classes.buttonContainer}>
        <Button variant="contained" className={classes.button} color="primary" onClick={() => window.location.reload(true)}>
            Yes
        </Button>
        <Button variant="contained" className={classes.button} color="secondary">
            No
        </Button>
        </div>
    </div>
  )
}

export default withStyles(styles)(Ending)