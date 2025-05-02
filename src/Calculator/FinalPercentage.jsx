import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const FinalPercentage = () => {
  const { formValues } = useContext(FormContext);

  return (
    <div>
      <h3>Total Marks: {formValues.totalMarks || 0}</h3>
      <h3>Percentage: {formValues.percentage || 0}%</h3>
    </div>
  );
};

export default FinalPercentage;
