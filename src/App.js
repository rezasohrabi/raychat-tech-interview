import './App.scss';
import QuestionList from './Components/QuestionList';
import ToggleMessage from './ToggleMessage';

function App() {
  return (
    <div className="app">
        <ToggleMessage />
        <QuestionList />
    </div>
  );
}

export default App;
