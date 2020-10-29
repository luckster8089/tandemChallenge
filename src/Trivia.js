import React from 'react';
import { withStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './styles/TriviaStyles';

function Trivia({ classes }) {
    const history = useHistory();

    return (
        <div className={classes.root}>
            <h2>Are You Ready For Tandem Trivia?</h2>
            <div className={classes.buttonContainer}>
            <Button variant="contained" className={classes.button} color="primary" onClick={() => history.push('/tandemTrivia')}>
                Yes
            </Button>
            <Button variant="contained" className={classes.button} color="secondary">
                No
            </Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(Trivia);
