// import React from 'react';
// import { FormProvider } from './Calculator/FormContext';
// import InputField from './Calculator/InputField';
// import FinalPercentage from './Calculator/FinalPercentage';
// import { formFields } from './Calculator/formData';
// import './Calculator/styles.css';

// const App = () => {
//   return (
//     <FormProvider>
//       <div className="app-container">
//         <h1>Student Marks and Percentage Form</h1>
//         <form>
//           {formFields.map(field => (
//             <div key={field.id}>
//               <InputField field={field} />
//             </div>
//           ))}
//           <FinalPercentage />
//         </form>
        
//       </div>
//     </FormProvider>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { FormProvider } from './Calculator/FormContext';
import MainForm from './Calculator/MainForm';
import SubmissionsList from './Calculator/SubmissionsList';
import './Calculator/styles.css';

const App = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch('http://localhost:3001/input');
        const data = await res.json();
        setSubmissions(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchSubmissions();
  }, []);

  return (
    <FormProvider>
      <div className="app-container">
        <MainForm setSubmissions={setSubmissions} />
        <SubmissionsList submissions={submissions} />
      </div>
    </FormProvider>
  );
};

export default App;

