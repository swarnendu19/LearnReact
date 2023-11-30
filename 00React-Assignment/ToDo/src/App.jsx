import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Manage Your Time</h1>
      <TodoForm></TodoForm>
    </>
  )
}

export default App
