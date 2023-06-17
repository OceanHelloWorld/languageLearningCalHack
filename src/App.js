import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Quiz from './Quiz';
import Conversation from './Conversation';

function App() {
  const [shouldRenderQuizPage, setShouldRenderQuizPage] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
      <button onClick ={() => setShouldRenderQuizPage(!shouldRenderQuizPage)}>
        Change Page
      </button>
        {
          shouldRenderQuizPage ? <Quiz /> : <Conversation />
        }
      </header>
    </div>
  );
}

export default App;
