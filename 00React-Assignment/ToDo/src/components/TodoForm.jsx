import React from 'react'
import { useState } from 'react';


function TodoForm() {

    const [task,setTask]=useState(" ")
    const[taskList,setTaskList] = useState([])
    const handleChange =(e)=>{
        setTask(e.target.value)
     }
    const handleAdd=()=>{
        if(task.trim() !== ''){
            setTaskList([...taskList,task])
            setTask(' ')
        }
     }
  return ( 
    <div>
   {/* Task input form */}
   <label>
        Task:
        <input
          type="text"
          value={task} 
          onChange={handleChange }
        />
      </label>

        <button 
        type='submit'
        onClick={handleAdd}>
          Add
          
        </button>
     
      {/* Display The list of tasks */}
      <ul>
       {taskList.map((todo,index)=>(
        <li key={index}>{todo}</li>
       ))} 
      </ul>
    </div>
  )
}

export default TodoForm
