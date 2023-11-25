import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Border from './Border';

function Resume({data}) {
  return (
    <>
     <div className='resume'>
     <h1>My Resume</h1>
     <Border>
     <Experience experience={data.experience}/>
     </Border>
     <Border>
     <Education education={data.education}/>
     </Border>
     <Border>
     <Skills skills={data.skills } />
     </Border>
     
    </div>
      
    </>
  )
}

export default Resume
