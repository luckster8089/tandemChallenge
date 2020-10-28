import React from 'react'

export default function TriviaGame({ data }) {
    const rand = Math.floor(Math.random() * data.length)
    const randomQuestion = data[rand]
    console.log(randomQuestion)
    // Randomize Array
    // Loop and pick 10 questions 
    // Separate into new array 
    return (
        <div>
            
        </div>
    )
}
