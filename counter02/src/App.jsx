import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter = 15
let [counter, setCounter] = useState(0)
const addvalue = () =>  {
  // counter = counter + 1
  setCounter(counter + 1)
  console.log("Clicked", counter);

}
const removevalue = () => {
  setCounter(counter - 1)
  console.log("Clicked", counter)
}
  return (
    <>
      <h1>Code and chai</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove value {counter}</button>
    </>
  )
}

export default App  
