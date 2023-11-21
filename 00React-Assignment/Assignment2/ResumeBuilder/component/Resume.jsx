import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

function Resume({data}) {
  return (
    <>
     <div className='resume'>
     <h1>My Resume</h1>
     <Experience experience={data.experience}/>
     <Education education={data.education}/>
     <Skills skills={data.skills} />
    </div>
      
    </>
  )
}

export default Resume
