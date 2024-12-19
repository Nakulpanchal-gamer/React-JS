import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-5 mb-6'>Tailwind css</h1>
      
      <Card username="code" btnText="visit me"/>
      <Card username="chai"/>
      

    </>
  )
}

export default App
