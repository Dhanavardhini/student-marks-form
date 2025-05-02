import React from 'react';

const SubmissionsList = ({ submissions }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Submitted Students</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {submissions.map(entry => (
          <div
            key={entry.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '15px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h3>{entry.firstName} {entry.lastName}</h3>
            <p><strong>Email:</strong> {entry.email}</p>
            <p><strong>Gender:</strong> {entry.gender}</p>
            <p><strong>Department:</strong> {entry.department}</p>
            <p><strong>College:</strong> {entry.college}</p>
            <p><strong>Subjects:</strong> {entry.subjects?.join(', ')}</p>
            <p><strong>Total Marks:</strong> {entry.totalMarks}</p>
            <p><strong>Percentage:</strong> {entry.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmissionsList;
