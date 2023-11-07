import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos : [{id: 1, text : "Hello World" }]
}

// whenever we do some addTOdo , We get two default variabele 
// which is called state and action

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state,action)=>{
            const todo = {
                id :  nanoid(),
                text :  action.payload 
                         
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action )=>{
             state.todos = state.todos.filter((todo)=>todo.id!==action.payload)

        },
      
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer