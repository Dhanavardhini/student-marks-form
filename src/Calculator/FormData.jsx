
export const formFields = [
  { 
    id: 1,
     name: 'firstName', 
     type: 'text', 
     label: 'First Name', 
     placeholder: 'Enter First Name' 
    },
  { 
    id: 2,
    name: 'lastName', 
    type: 'text', 
    label: 'Last Name', 
    placeholder: 'Enter Last Name' 
  },
  { 
    id: 3, 
    name: 'email', 
    type: 'text', 
    label: 'Email', 
    placeholder: 'Enter Email' 
  },
  { 
    id: 4, 
    name: 'gender',
    label: 'Gender',
    type: 'radio',
    options: ['Male', 'Female', 'Other']
  },
  {
    id: 5,
    name: 'department', 
    type: 'dropdown', 
    label: 'Department', 
    options: ['CSE', 'ECE', 'EEE', 'IT'] 
  },
  { 
    id: 6, 
    name: 'college', 
    type: 'datalist', 
    label: 'College', 
    options: ['MIT', 'Anna University', 'IIT'] 
  },
  { 
    id: 7, 
    name: 'subjects', 
    type: 'checkbox', 
    label: 'Semester', 
    options: ['Current Semester', 'Overall Semester'], 
    singleSelect: true 
  },
  { 
    id: 8, 
    name: 'mark1', 
    type: 'number', 
    label: 'Tamil', 
    maxLength: 3, 
    defaultValue: 0 
  },
  { 
    id: 9, 
    name: 'mark2', 
    type: 'number', 
    label: 'English', 
    maxLength: 3, 
    defaultValue: 0 
  },
  { 
    id: 10, 
    name: 'mark3', 
    type: 'number', 
    label: 'Maths', 
    maxLength: 3, 
    defaultValue: 0 
  },
  { 
    id: 11, 
    name: 'mark4', 
    type: 'number', 
    label: 'Science', 
    maxLength: 3, 
    defaultValue: 0 
  },
  { 
    id: 12, 
    name: 'mark5', 
    type: 'number', 
    label: 'Social', 
    maxLength: 3, 
    defaultValue: 0 
  },
  { 
    id: 13, 
    name: 'totalMarks', 
    type: 'text', 
    label: 'Total Marks', 
    readonly: true, 
    defaultValue: 0 
  },
  { 
    id: 14, 
    name: 'percentage', 
    type: 'text', 
    label: 'Percentage', 
    readonly: true, 
    defaultValue: 0 
  }
];
