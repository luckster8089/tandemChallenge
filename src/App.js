import jsonData from './triviaQuestions.json';
import Trivia from './Trivia';

function App() {
  const trivia = jsonData.map(questions => (
    <Trivia
      questions={questions.questions}
      answers={questions.correct}
      incorrectAnswers={questions.incorrect}
    />
  ))

  return (
    <div className="App">
      <Trivia data={jsonData} />
    </div>
  );
}

export default App;
