import { useState } from 'react'
import './App.css'

function App() {
  const [currentTime,setCurrentTime] = useState(new Date())
  const[isRunning,setIsRunning]= useState(true)
  const[intervalId,setIntervalId]= useState(null)
  const updateCurrentTime =()=>{
    setCurrentTime(new Date())
  }
  const startTimer =()=>{
    setIsRunning(true)
    const id = setInterval(updateCurrentTime, 1000);
    setIntervalId(id);  }

  const stopTimer= ()=>{
    setIsRunning(false)
    clearInterval(intervalId);
  }

  return (
    <>
    <div>
      <h1>Digital Clock</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
      <button onClick={startTimer} disabled={isRunning}>
        Start Timer
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop Timer
      </button>
    </div>
    </>
  )
}
export default App
