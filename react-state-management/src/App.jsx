// src/App.jsx

import { useState } from 'react'
import './App.css'
import ExampleComponent from './ExampleComponent'

const App = () => {

  /* const [isDarkMode, setIsDarkMode] = useState(false) */

  const [mode, setMode] = useState('light')

  const [person, setPerson] = useState({
    firstName: 'Tobias',
    lastName: 'Rieper',
    profession: 'flexible freelancer',
    hasPets: false,
    birthYear: 1964,
  })

  return (
    <>
      <div className={mode}>
        <h1>{person.firstName} {person.lastName}</h1>
        <p>Hello! My name is {person.firstName} {person.lastName}</p> 
         <p>I am a {person.profession} born in {person.birthYear}</p>
         <p> I {person.hasPets ? `do` : `don't`} own pets</p>
      </div>
      <div> {/* () => prevents infinite looping */}
        <button onClick={() => handleMode('dark')}>Dark Mode</button>
        <button onClick={() => handleMode('light')}>Light Mode</button>
        <button onClick={() => handleMode('neon')}>Neon Mode</button>
        <button onClick={() => handleMode('night')}>Night Mode</button>
        <button onClick={() => handleMode('pokeball')}>Pokeball Mode</button>
        <button onClick={() => handleMode('gen5')}>Gen-5 Mode</button>
      </div>
      <ExampleComponent/>
    </>
  )

  /* Functions can be hoisted too! Cool! */

  /* Must be defined inside of main App render function though */

  function handleMode(modeValue) {
    console.log(`${modeValue} mode!`);
    setMode(modeValue);
  }

/*   function handleDarkMode() {
    setIsDarkMode(true)
    console.log('Dark Mode!');
    console.log(isDarkMode)
  }
  
  function handleLightMode() {
    setIsDarkMode(false)
    console.log('Light Mode!');
    console.log(isDarkMode)
  } */

}



export default App