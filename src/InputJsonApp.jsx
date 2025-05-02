import React, { useContext, useEffect } from 'react';
import { FormProvider } from './Inputjson/ContextForm';
import InputField from './Inputjson/FieldInput';
import FinalPercentage from './Inputjson/FinalPercentage';
import { formFields } from './Inputjson/DataForm';
import './Inputjson/styles.css';

const App = () => {
  const { formValues } = useContext(FormContext);

  // Log form data on every change (for debugging)
  useEffect(() => {
    console.log("Form Data in JSON: ", JSON.stringify(formValues, null, 2));
  }, [formValues]);

  return (
    <FormProvider>
      <div className="app-container">
        <h1>Student Marks and Percentage Form</h1>
        <form>
          {formFields.map(field => (
            <div key={field.id}>
              <InputField field={field} />
            </div>
          ))}
        </form>
        <FinalPercentage />
      </div>
    </FormProvider>
  );
};

export default App;
