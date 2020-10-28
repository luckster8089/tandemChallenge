import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import jsonData from './triviaQuestions.json';
import Trivia from './Trivia';
import TriviaGame from './TriviaGame';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>  <Trivia />}
        />
        <Route
          exact
          path="/tandemTrivia"
          render={() =>  <TriviaGame data={jsonData} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
