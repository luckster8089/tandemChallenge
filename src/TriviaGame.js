import React from 'react'

export default function TriviaGame({ data }) {

    const newArr = [];
    while (newArr.length <= 9) {
      let rand = Math.floor(Math.random() * data.length)
      let randomQuestion = data[rand]
      if (newArr.indexOf(randomQuestion) === -1)newArr.push(randomQuestion)
    }

    console.log(newArr)
    
    return (
        <div>
            hi
        </div>
    )
}


