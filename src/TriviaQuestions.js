import React, { useState } from 'react'

export default function TriviaQuestions({ question, answer, incorrect }) {
    const [questions, setQuestions] = useState(question)

   

    return (
        <div>
            <h4>{questions}</h4>
        </div>
    )
}
