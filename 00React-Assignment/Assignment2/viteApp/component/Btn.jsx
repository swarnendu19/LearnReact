import React from 'react'

function Btn(message , children) {
  return (
    <div>
      <button onClick={()=> {
        console.log(message);
      }}> {children}</button>
    </div>
  )
}

export default Btn
