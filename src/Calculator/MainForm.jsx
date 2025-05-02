// import React, { useContext } from 'react';
// import { FormContext } from './FormContext';
// import InputField from './InputField';
// import FinalPercentage from './FinalPercentage';
// import { formFields } from './formData';
// import './styles.css';

// const MainForm = ({ setSubmissions }) => {
//   const { formValues, resetForm } = useContext(FormContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newEntry = {
//       id: Date.now().toString(),
//       ...formValues
//     };

//     try {
//       const response = await fetch('http://localhost:3001/input', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newEntry)
//       });

//       if (response.ok) {
//         const savedEntry = await response.json();
//         setSubmissions(prev => [...prev, savedEntry]);
//         alert('Form submitted successfully!');
//         resetForm(); // Clear input values here
//       } else {
//         alert('Submission failed.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Something went wrong.');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h1>Student Marks and Percentage Form</h1>
//       <form onSubmit={handleSubmit} >
//         {formFields.map(field => (
//           <InputField key={field.id} field={field} />
//         ))}
//         <FinalPercentage />
//         <button type="submit" >Submit</button>
//       </form>
//     </div>
//   );
// };

// export default MainForm;


import React, { useContext } from 'react';
import { FormContext } from './FormContext';
import InputField from './InputField';
import FinalPercentage from './FinalPercentage';
import { formFields } from './formData';
import './styles.css';

const MainForm = ({ setSubmissions }) => {
  const { formValues, resetForm } = useContext(FormContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Check if all fields are filled before submitting
    const isFormComplete = formFields.every(field => {
      const value = formValues[field.name];
      if (field.type === 'checkbox') {
        return Array.isArray(value) && value.length > 0;
      }
      return value !== undefined && value !== '';
    });

    if (!isFormComplete) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const newEntry = {
      id: Date.now().toString(),
      ...formValues
    };

    try {
      const response = await fetch('http://localhost:3001/input', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      });

      if (response.ok) {
        const savedEntry = await response.json();
        setSubmissions(prev => [...prev, savedEntry]);
        alert('Form submitted successfully!');
        resetForm(); // 🔄 Clear input values here
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="form-container">
      <h1>Student Marks and Percentage Form</h1>
      <form onSubmit={handleSubmit}>
        {formFields.map(field => (
          <InputField key={field.id} field={field} />
        ))}
        <FinalPercentage />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MainForm;
