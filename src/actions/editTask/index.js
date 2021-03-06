import {TASK_EDIT} from 'actions/actionTypes';
import {api} from 'api';
import {createActionRequest} from 'utils';

const ActionCreator = {
  editTask: createActionRequest(TASK_EDIT),
};

const Operation = {
  editTask: (id, newData) => async (dispatch) => {
    try {
      dispatch(ActionCreator.editTask.request());
      const token = localStorage.getItem('token');
      newData.append('token', token)
      const response = await api.post(`/edit/${id}`, newData, {
        params: {
          developer: 'Dorosh',
        }
      });
      if (response.data.status === 'error') {
        dispatch(ActionCreator.editTask.failure(response.data.message));
      } else {
        dispatch(ActionCreator.editTask.success(response.data));
      }
    } catch (error) {
      throw error.response
    }
  }
};

export {ActionCreator, Operation};
