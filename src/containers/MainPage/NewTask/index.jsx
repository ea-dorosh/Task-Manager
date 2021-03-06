import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Operation} from "actions/addTask";
import {Form, Formik, Field} from 'formik'
import FormInput from "components/FormInput";
import FormTextarea from "components/FormTextarea";
import './index.css'

const NewTask = () => {
  const dispatch = useDispatch();
  const [isShowMessage, setIsShowMessage] = useState(false);

  const onSubmitHandler = (values, {setSubmitting, setErrors, resetForm}) => {
    const form = new FormData();
    Object.entries(values).map(el => form.append(...el))

    dispatch(Operation.addTask(form, setErrors, resetForm, setIsShowMessage))
        .finally(() => setSubmitting(false));
  };

  const initialValues = {
    username: '',
    email: '',
    text: '',
  };

  return (
      <div className='new-task'>
        {isShowMessage && <div className="new-task__message alert alert-success" role="alert">
          Your task was successfully added
        </div>}
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
          <Form className='new-task__form'>
            <Field name='username' component={FormInput} labelText='Your Name' />
            <Field name='email' component={FormInput} labelText='Your Email' />
            <Field name='text' component={FormTextarea} labelText='Enter task'/>
            <div className='new-task__btn-wrapper'>
              <button type='submit' className='btn btn-success'>Add Task</button>
            </div>
          </Form>
        </Formik>
      </div>
  );
}

export default NewTask;
