import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    mark1: '0',
    mark2: '0',
    mark3: '0',
    mark4: '0',
    mark5: '0',
    totalMarks: '0',
    percentage: '0'
  });

  const updateValue = (name, value) => {
    const updatedValues = { ...formValues, [name]: value };

    // total marks caluculate panrom

    const totalMarks = ['mark1', 'mark2', 'mark3', 'mark4', 'mark5']
      .reduce((total, mark) => total + (parseInt(updatedValues[mark], 10) || 0), 0);
  
    // ella number enter aagutha paka tha every use panrom  every is the keyword
    const allMarksEntered = ['mark1', 'mark2', 'mark3', 'mark4', 'mark5']
      .every(mark => parseInt(updatedValues[mark], 10) > 0);

    // ella markum enter aanathuku apram percentage show pananum and same fixed ethana 78.09 show pana use panrom 
    const percentage = allMarksEntered ? ((totalMarks / 500) * 100).toFixed(2) : '0';

    // total marks & percentage
    updatedValues.totalMarks = totalMarks;
    updatedValues.percentage = percentage;

    setFormValues(updatedValues);
  };

  const resetForm = () => {
    setFormValues({}); // Clear all inputs
  };
  return (
    <FormContext.Provider value={{ formValues, updateValue ,resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
