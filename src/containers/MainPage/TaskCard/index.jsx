import React, {useState, useRef, useEffect} from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {Operation as EditOperation} from "actions/editTask"
import {Formik, Form, Field} from 'formik'
import FormTextarea from "components/FormTextarea";
import {Operation as TasksOperation} from "actions/tasks";
import FormInputStatus from "components/FormInputStatus";
import {Link} from "react-router-dom";

const TaskCard = ({task}) => {
  const dispatch = useDispatch();
  const textareaRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const {authStatus} = useSelector(state => state.user)

  const [isShowMessage, setIsShowMessage] = useState(false);


  useEffect(() => {
    if (isEdit) {
      textareaRef.current.focus();
    }
  }, [isEdit]);

  const editTaskHandler = () => {
    if(!authStatus) {
      setIsShowMessage(true)
      setTimeout(()=>setIsShowMessage(false), 2000)
    } else {
      setIsEdit(!isEdit)
    }
  }

  const onSubmitHandler = (values, {setSubmitting}) => {
    const form = new FormData();
    form.append('text', values.text)
    if (task.status === 0) {
      form.append('status', '1')
    }
    dispatch(EditOperation.editTask(task.id, form))
        .then(()=>dispatch(TasksOperation.fetchTasks()))
        .finally(() => setSubmitting(false));
  }

  const fulfillTaskHandler = () => {
    if(!authStatus) {
      setIsShowMessage(true)
      setTimeout(()=>setIsShowMessage(false), 2000)
    } else {
      const form = new FormData();
      if (task.status === 0) {
        form.append('status', '10')
      } else {
        form.append('status', '11')
      }
      dispatch(EditOperation.editTask(task.id, form))
          .then(()=>dispatch(TasksOperation.fetchTasks()))
    }
  }

  return (
      <div className="task" key={task.id}>
          <Formik initialValues={{text: task.text, status: task.status}} onSubmit={onSubmitHandler}>
            <Form>
              <div className='task__top-wrapper'>
                <h5 className="card-title">{task.username}</h5>
                <Field name='status' component={FormInputStatus} status={task.status}/>
              </div>
              <p className="card-text">{task.email}</p>
              {!isEdit ? <p className="card-text">{task.text}</p> :
                  <Field component={FormTextarea} name='text' reference={textareaRef}/>
              }
              <div className='task__btn-wrapper'>
                {task.status === 0 || task.status === 1 ?
                !isEdit ? <>
                      <button type='button' className="btn btn-warning" disabled={isShowMessage} onClick={()=>editTaskHandler()}>Edit Task</button>
                      <button type='button' className="btn btn-warning" disabled={isShowMessage} onClick={()=>fulfillTaskHandler()}>Mark as Fulfilled</button></> :
                    <>
                      <button type='button' className="btn btn-danger" onClick={()=>editTaskHandler()}>Discard Changes</button>
                      <button type='submit' className="btn btn-warning">Save Changes</button></>
                    : null
                }
                {isShowMessage && <div className="task__message alert alert-danger" role="alert">
                  Please <Link to={'/login'} className="alert-link">Sign In</Link> to change tasks
                </div>}
              </div>
            </Form>
          </Formik>
      </div>
  );
}

export default TaskCard
