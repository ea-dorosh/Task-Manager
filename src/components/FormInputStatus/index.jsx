import React from 'react';
import './index.css';

const FormInputStatus = ({field, status}) => {
  let taskStatus;

  switch (status) {
    case 0:
      taskStatus = 'Unfulfilled'
      break
    case 1:
      taskStatus = 'Unfulfilled (Edited)'
      break
    case 10:
      taskStatus = 'Fulfilled'
      break
    case 11:
      taskStatus = 'Fulfilled (Edited)'
      break
    default:
      taskStatus = ''
      break
  }

  return <label className={`input-status-box input-status-box--${status}`}>
    <span>{taskStatus}</span>
    <input readOnly={true} {...field}/>
  </label>
};

export default FormInputStatus;
