import { useState } from 'react'
import './App.css'
import WeatherFrom from './components/WeatherFrom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherFrom/>
    </>
  )
}

export default App
