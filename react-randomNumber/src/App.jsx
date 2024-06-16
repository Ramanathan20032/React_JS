import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './result'

const randomNumber = Math.floor(Math.random() * 10) + 1

function App() {
  
  const [term, setTerm] = useState('')
  function handleChange(event){
    setTerm(event.target.value)
  }

  return (
    <div className='container'>
      <div className='head'>
        <label htmlFor="term">
          Guess The Number Between 1 - 10   (Random No : {randomNumber})
        </label>
      </div>
      <input 
        type="text" 
        name='term'
        id='term'
        onChange={handleChange}
      />
      <Result randomNumber={randomNumber} term={term}/>
    </div>
  )
}

export default App
