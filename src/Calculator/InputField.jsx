
import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const InputField = ({ field }) => {
  const { formValues, updateValue } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateValue(name, value);
  };

  const handleFocus = (e) => {
    // '0' is focused,but we can clear it
    if (e.target.value === '0') {
      e.target.value = ''; // Clear the value when click the input
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    //  value is empty or 0, reset the percentage and total
    if (value === '' || value === '0') {
      updateValue(name, '0'); // Reset value to 0 if erased
    }
  };

  const inputValue = formValues[field.name] ?? field.defaultValue ?? '';

  const commonProps = {
    name: field.name,
    value: inputValue,
    placeholder: field.placeholder || '',
    readOnly: field.readonly,
    maxLength: field.maxLength,
  };

  return (
    <div style={{ marginBottom: '12px' }}>

      <label>{field.label}</label>
      
      <br />
      
      {field.type === 'text' && (
        <input
          type="text"
          {...commonProps}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}

      {/* {field.type === 'number' && (
        <input
          type="number"
          min="0"
          max="100"
          {...commonProps}
          onChange={(e) => {
            const val = parseInt(e.target.value || '0', 10);
            if (val > 100) {
              alert(`${field.label} cannot be more than 100`);
              updateValue(field.name, '100');
            } else {
              handleChange(e);
            }
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )} */}

{field.type === 'number' && (
  <input
    type="number"
    min="0"
    max="100"
    {...commonProps}
    onKeyDown={(e) => {
      // Allow only digits and navigation keys
      const allowedKeys = [
        'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'
      ];
      const isNumber = /^[0-9]$/.test(e.key);

      if (!isNumber && !allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    }}
    onChange={(e) => {
      const val = parseInt(e.target.value || '0', 10);
      if (val > 100) {
        alert(`${field.label} cannot be more than 100`);
        updateValue(field.name, '100');
      } else {
        handleChange(e);
      }
    }}
    onFocus={handleFocus}
    onBlur={handleBlur}
  />
)}


      {/* {field.type === 'radio' && field.options.map(opt => (
        <label key={opt} style={{ marginRight: '10px' }}>
          <input
            type="radio"
            name={field.name}
            value={opt}
            checked={formValues[field.name] === opt}
            onChange={handleChange}
          />
          {opt}
        </label>
      ))} */}

      {field.type === 'radio' && (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {field.options.map(opt => (
            <label key={opt} >
              <div style={{display:'flex',flexDirection:'row'}}>
              <div>
              <input
                type="radio"
                name={field.name}
                value={opt}
                checked={formValues[field.name] === opt}
                onChange={handleChange}
                style={{ marginRight: '15px'}} 
              />
              </div>
              <div style={{ fontWeight: 'normal' }} >
              {opt}
              </div>
              </div>
            
              
            </label>
          ))}
        </div>
      )}


      {field.type === 'dropdown' && (
        <select
          name={field.name}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="">Select</option>
          {field.options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      )}  

      {/* {field.type === 'datalist' && (
        <>
          <input
            list={`${field.name}-list`}
            {...commonProps}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <datalist id={`${field.name}-list`}>
            {field.options.map(opt => (
              <option key={opt} value={opt} />
            ))}
          </datalist>
        </>
      )} */}

{field.type === 'datalist' && (
  <>
    <input
      list={`${field.name}-list`}
      name={field.name}
      value={formValues[field.name] || ''}
      onChange={(e) => updateValue(field.name, e.target.value)}
      onBlur={handleBlur}
      placeholder={`Select ${field.label}`}
      autoComplete="off" // Helps with browser-level suggestion
    />
    <datalist id={`${field.name}-list`}>
      {field.options.map(opt => (
        <option key={opt} value={opt} />
      ))}
    </datalist>
  </>
)}


      {/* {field.type === 'checkbox' && field.options.map(opt => (
        <label key={opt} style={{ marginRight: '10px' }}>
          <input
            type="checkbox"
            name={field.name}
            value={opt}
            checked={(formValues[field.name] || []).includes(opt)}
            onChange={(e) => {
              const checked = e.target.checked;
              const current = formValues[field.name] || [];
              const updated = field.singleSelect
                ? [opt]
                : checked
                ? [...current, opt]
                : current.filter(item => item !== opt);
              updateValue(field.name, updated);
            }}
            onBlur={handleBlur}
          />
          {opt}
        </label>
      ))} */}

      {/* rendu athaa vathu onu tha click pana mudium */}

      {/* {field.type === 'checkbox' && (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {field.options.map(opt => (
            <label key={opt} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div>
                  <input
                    type="checkbox"
                    name={field.name}
                    value={opt}
                    checked={(formValues[field.name] || []).includes(opt)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      const current = formValues[field.name] || [];
                      const updated = field.singleSelect
                        ? [opt]
                        : checked
                        ? [...current, opt]
                        : current.filter(item => item !== opt);
                      updateValue(field.name, updated);
                    }}
                    onBlur={handleBlur}
                    style={{ marginRight: '25px' }}
                  />
                </div>
                <div style={{ fontWeight: 'normal' }}>
                  {opt}
                </div>
              </div>
            </label>
          ))}
        </div>
      )} */}


      {field.type === 'checkbox' && (
        <div
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            flexWrap: 'nowrap',
            whiteSpace: 'nowrap',
            paddingBottom: '10px',
          }}
        >
          {field.options.map(opt => {
            const selectedValues = formValues[field.name] || [];
            return (
              <label key={opt} style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  name={field.name}
                  value={opt}
                  checked={selectedValues.includes(opt)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const updatedValues = checked
                      ? [...selectedValues, opt]
                      : selectedValues.filter(item => item !== opt);
                    updateValue(field.name, updatedValues);
                  }}
                  style={{ marginRight: '10px' }}
                />

                <div style={{ fontWeight: 'normal' }}>
                        {opt}
                      </div>
              </label>
            );
          })}
        </div>
      )}


    </div>
  );
};

export default InputField;
