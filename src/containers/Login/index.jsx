import React from 'react';
import './index.css';
import {Field, Form, Formik} from 'formik';
import {Operation} from 'actions/user';
import {useDispatch} from 'react-redux';
import InputText from "components/FormInput";
import FieldError from "components/FormFieldError";

const initialValues = {
  username: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = (values, {setSubmitting, setErrors}) => {
    const form = new FormData();
    Object.entries(values).map(el => form.append(...el))

    dispatch(Operation.login(form, setErrors))
        .catch(setErrors)
        .finally(() => setSubmitting(false));
  };

  return (
    <div className='page-login'>
      <div className='login'>
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
          <Form className='login__wrapper'>
            <Field name='username' component={InputText} labelText='User Name' />
            <Field name='password' type='password' component={InputText} labelText='Password' />
            <button type='submit' className='btn btn-light'>Sign In</button>
            <FieldError name='message' />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
