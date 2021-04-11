import { useEffect } from 'react';
import './App.css';
import Quiz from './Components/Quiz';
import ToggleMessage from './ToggleMessage';

window.loadNumbersBlock = function() {

  function isEvenOrOdd(number) {
    if(number % 2 === 0) return 'even';
    
    return 'odd';
  }

  function count(number) {
      let count = 0;
      while(number != 0) {
        number = Math.floor(number / 10);
        ++count;
      }
      return count;
  }

  function logNumbersEvenOrOdd(numbers) {
      for(let index = 0; index < numbers.length; index++ ) {
          const number = numbers[index];

          const count = count(number);
          const determinedEvenOrOdd = isEvenOrOdd(number);

          if(count > 1) {
            console.log(`${number} has ${count} digits (${determinedEvenOrOdd})`);
            continue;
          }
          console.log(`${number} has ${count} digit (${determinedEvenOrOdd})`);
      }    
  }
  logNumbersEvenOrOdd([32, 5, 76, 98543, 7658])

}

function App() {
  useEffect(() =>{
      window.loadNumbersBlock();
  }, []);
  return (
    <div className="app">
        <ToggleMessage />
        <Quiz />
    </div>
  );
}

export default App;
