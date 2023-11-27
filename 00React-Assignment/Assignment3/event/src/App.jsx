import React from 'react'
import './App.css'

function App() {
 
  return (
    <>
      <img src="https://images.pexels.com/photos/372787/pexels-photo-372787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      
      <input type="text" onFocus={()=>{
        console.log("Focused on the text box");
      }}  onBlur={()=>{
        console.log("Out of Textbox");
      }}/>

      <button  onDoubleClick={(e)=>{
        alert("Button CLicked")
        console.log("Clicked");
      }}>Play</button>

      <p onCopy={()=> { alert( "Copied")}} >Hello Everyone</p>
      <div>
      <form action="">
        <input type="text" />
        <button></button>
      </form>
      </div>
     </>

  )
}

export default App
