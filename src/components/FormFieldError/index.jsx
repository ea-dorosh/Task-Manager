import React from 'react';
import './index.css';
import {ErrorMessage} from 'formik';

const FormFieldError = ({name}) => (
  <div className='field-error'>
    <ErrorMessage name={name}>{(error) => <span className='field-error__text'>{error}</span>}</ErrorMessage>
  </div>
);

export default FormFieldError;
