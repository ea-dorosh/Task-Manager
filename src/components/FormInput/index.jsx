import React from 'react';
import './index.css';
import FieldError from 'components/FormFieldError';

const FormInput = ({field, form, labelText}) => (
    <label className='input-box'>
      <span className='input-label'>{labelText}</span>
      <input
          className={'input-text'}
          {...field}
          onChange={(evt) => {
            form.handleChange(evt);
          }}
      />
      <FieldError name={field.name} />
    </label>
);

export default FormInput;
