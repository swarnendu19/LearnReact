import React from 'react';
import List from '../component/List';
import Btn from '../component/Btn';

const App = () => {
  let items = {
    experience: [
      { year: 2012, company: 'XYZ Corp', role: 'Software Developer' },
      { year: 2015, company: 'ABC Ltd', role: 'Senior Developer' },
      { year: 2018, company: 'PQR Inc', role: 'Tech Lead' },
    ],
    education: [
      { year: 2008, degree: 'Bachelor of Science', institution: 'University A' },
      { year: 2011, degree: 'Master of Science', institution: 'University B' },
    ],
    skills: ["node js", "react js" ],
  };

  return (
    <div>
      <List layout="experience" items={items.experience} />
      <List layout="education" items={items.education} />
      <List layout="skills" items={items.skills} />
       <Btn>Me</Btn>
    </div>
  );
};

export default App;


 

