import React from 'react'

function Education({education}) {
  return (
    <div>
      <h2>Education</h2>
      <ul>
        {education.map((item,index)=> (
            <li key={index}>
                <strong>{item.year}</strong> - {item.degree}, {item.institution}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Education
