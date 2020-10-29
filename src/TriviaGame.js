import React from 'react';
import TriviaQuestions from './TriviaQuestions';


export default function TriviaGame({ data }) {
    const newArr = [];
    while (newArr.length <= 9) {
      let rand = Math.floor(Math.random() * data.length)
      let randomQuestion = data[rand]
      if (newArr.indexOf(randomQuestion) === -1)newArr.push(randomQuestion)
    }

    return (
        <div>
            <h3>Welcome to Tandem Trivia!</h3>
            <TriviaQuestions questions={newArr} />
        </div>
    )
}


