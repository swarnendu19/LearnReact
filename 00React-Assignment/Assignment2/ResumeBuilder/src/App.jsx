import React from 'react';
import Resume from "./component/Resume";


const resumeData = {
  experience: [
    { year: 2012, company: 'XYZ Corp', role: 'Software Developer' },
    { year: 2015, company: 'ABC Ltd', role: 'Senior Developer' },
    { year: 2018, company: 'PQR Inc', role: 'Tech Lead' },
  ],
  education: [
    { year: 2008, degree: 'Bachelor of Science', institution: 'University A' },
    { year: 2011, degree: 'Master of Science', institution: 'University B' },
  ],
  skills: ['React.js', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
};

function App() {
  return (
    <div className="App">
      <Resume data={resumeData} />
    </div>
  );
}

export default App;
