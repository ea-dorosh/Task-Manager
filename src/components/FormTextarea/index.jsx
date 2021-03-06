import React from 'react';
import './index.css';
import FieldError from 'components/FormFieldError';

const FormTextarea = ({field, form, labelText, reference}) => (
    <label className='text-box'>
      <span className='text-label'>{labelText}</span>
      <textarea
          rows={5}
          className={'text-text'}
          {...field}
          onChange={(evt) => {
            form.handleChange(evt);
          }}
          readOnly={form.isSubmitting}
          ref={reference}
      />
      <FieldError name={field.name} />
    </label>
);

export default FormTextarea;
