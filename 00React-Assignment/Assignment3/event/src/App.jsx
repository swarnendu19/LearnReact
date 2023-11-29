import React from 'react'
import './App.css'

function App() {
  const handleInputChange = (e)=>{
    alert("Clicked")}

    const handleSubmit =(e)=>{
      e.preventDefault()
      console.log("Input Clicked");
    }
 
  return (
    <>
      <img src="https://images.pexels.com/photos/372787/pexels-photo-372787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      
      <input type="text"  />

      <button  onDoubleClick={(e)=>{
        alert("Button CLicked")
        console.log("Clicked");
      }}    >Play</button>

      <p onCopy={()=> { alert( "Copied")}} >Hello Everyone</p>
      <div>
      <form onSubmit={handleSubmit}>
      <label>
        Enter something:
        <input type="text"   onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
      </div>
     </>

  )
}

export default App
