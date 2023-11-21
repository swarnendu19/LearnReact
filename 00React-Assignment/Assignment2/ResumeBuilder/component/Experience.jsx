import React from 'react'

function Experience ({experience}) {
  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {experience.map((item,index)=>(
          <li key={index}>
            <strong>{item.year}</strong> - {item.company}, {item.role }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience
