import React, {useState} from 'react';
import TriviaQuestions from './TriviaQuestions';


export default function TriviaGame({ data }) {

    const newArr = [];
    while (newArr.length <= 9) {
      let rand = Math.floor(Math.random() * data.length)
      let randomQuestion = data[rand]
      if (newArr.indexOf(randomQuestion) === -1)newArr.push(randomQuestion)
    }

    // const questions = newArr.map((question) => (
    //   <TriviaQuestions
    //     key={question.question}
    //     question={question.question}
    //     answers={question.correct}
    //     incorrect={question.incorrect}
    //     incrementQuestionCount={incrementQuestionCount}
    //     q={newArr}
    //   />
    // ))



    return (
        <div>
            <h3>Welcome to Tandem Trivia!</h3>
            <TriviaQuestions questions={newArr} />
        </div>
    )
}


