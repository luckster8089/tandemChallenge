import jsonData from './triviaQuestions.json';
import Trivia from './Trivia';

function App() {
  return (
    <div className="App">
      <Trivia data={jsonData} />
    </div>
  );
}

export default App;
