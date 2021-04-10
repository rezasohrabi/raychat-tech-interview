import './App.css';
import Quiz from './Components/Quiz';
import ToggleMessage from './ToggleMessage';

function App() {
  return (
    <div className="app">
        <ToggleMessage />
        <Quiz />
    </div>
  );
}

export default App;
