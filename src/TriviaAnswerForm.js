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
import styles from './styles/TriviaQuestionsStyles.js'

function TriviaAnswerForm({ classes, handleSubmit, question, error, value, handleChange }) {
    return (
            <form onSubmit={handleSubmit}>
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
            </form>
    )
}

export default withStyles(styles)(TriviaAnswerForm);
