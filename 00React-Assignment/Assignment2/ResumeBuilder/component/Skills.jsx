import React from 'react'

function Skills({skills}) {
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <ul>
        {  skills.map((skills, index) =>(
                        <li key= {index}>
                            {skills}
                         </li>
        ))

        }
      </ul>
    </div>
  )
}

export default Skills


