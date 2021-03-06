import {TASK_ADD} from 'actions/actionTypes';
import {api} from 'api';
import {createActionRequest} from 'utils';
import {Operation as TasksOperation} from 'actions/tasks';

const ActionCreator = {
  addTask: createActionRequest(TASK_ADD),
};

const Operation = {
  addTask: (newTask, funcError, funcReset, funcSucces) => async (dispatch) => {
    dispatch(ActionCreator.addTask.request());
    const response = await api.post(`/create`, newTask, {
      params: {
        developer: 'Dorosh',
      }
    });
    if (response.data.status === 'error') {
      funcError(response.data.message)
      dispatch(ActionCreator.addTask.failure(response.data.message));
    } else {
      dispatch(ActionCreator.addTask.success(response.data));
      dispatch(TasksOperation.fetchTasks())
      funcSucces(true)
      setTimeout(()=>funcSucces(false), 1000)
      funcReset()
    }
  }
};

export {ActionCreator, Operation};
