import React from 'react'

function TodoForm() {
    const handleChange =()=>{}
    const handleSubmit=()=>{}
  return (
    <div>
     <form>
        <input 
        type='text'
        name= 'task'
        onChange={handleChange}     
        placeholder='task'
         />
        <button 
        type='submit'
        onSubmit={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  )
}

export default TodoForm
