import React from 'react';
import { useLocation } from 'react-router-dom';
import './DepartmentDetails.css'; // Optional: Style this component as needed

const departmentDetails = {
  'Ministry of Finance': 'The Ministry of Finance is responsible for economic planning, budgeting, and financial management.',
  'National Treasury': 'The National Treasury manages public finances and implements fiscal policies.',
  'Office of the Controller of Budget': 'The Office of the Controller of Budget oversees the budget implementation and expenditure control.',
  // ... add details for other departments as needed
};

function DepartmentDetails() {
  const location = useLocation();
  const department = location.state?.department || '';

  return (
    <div className="DepartmentDetails">
      <h2>Department Details</h2>
      {department ? (
        <p>{departmentDetails[department]}</p>
      ) : (
        <p>No department selected.</p>
      )}
    </div>
  );
}

export default DepartmentDetails;
