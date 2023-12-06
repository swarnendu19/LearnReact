import React from 'react';
import Resume from "../component/Resume";


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
  skills : [ 'react js', 'node js']
};

function App() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="App">
      <Resume data={resumeData} />
      <button onClick={handlePrint}>Print</button>
       <button> Edit</button>
    </div>
  );
}

export default App;
