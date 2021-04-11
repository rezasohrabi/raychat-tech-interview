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

          const numberCount = count(number);
          const determinedEvenOrOdd = isEvenOrOdd(number);

          if(numberCount > 1) {
            console.log(`${number} has ${numberCount} digits (${determinedEvenOrOdd})`);
            continue;
          }
          console.log(`${number} has ${numberCount} digit (${determinedEvenOrOdd})`);
      }    
  }
  logNumbersEvenOrOdd([32, 5, 76, 98543, 7658])

}

window.loadFirstMissingCharacterBlock = function() {

  function initCharactersPresent(alphabet) {
    const characterPresent = {};
    for(let i = 0; i < alphabet.length; i++){
      const charactor = alphabet.charAt(i);
      characterPresent[charactor] = 0;
    }
    return characterPresent;
  }

  function logFirstMissingCharacter(characterPresent) {
    for(let character in characterPresent) {
      if(!characterPresent[character]) {
        console.log(character);
        break;
      }
    }
  }
  
  function findFirstMissingCharacter(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const characterPresent = initCharactersPresent(alphabet);

    for(let i = 0; i < string.length; i++) {
      const lowerCaseCharacter = string.charAt(i).toLowerCase();
      if(characterPresent.hasOwnProperty(lowerCaseCharacter)) {
        characterPresent[lowerCaseCharacter] += 1;
      }
    }

    logFirstMissingCharacter(characterPresent)
  }
  findFirstMissingCharacter('raychat');

}

function App() {
  useEffect(() =>{
      window.loadNumbersBlock();
      window.loadFirstMissingCharacterBlock();
  }, []);
  return (
    <div className="app">
        <ToggleMessage />
        <Quiz />
    </div>
  );
}

export default App;
