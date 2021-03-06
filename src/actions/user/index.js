import {USER_LOGIN, USER_LOGOUT} from 'actions/actionTypes';
import {api} from 'api';
import {createActionRequest} from 'utils';

const ActionCreator = {
  login: createActionRequest(USER_LOGIN),
  logout: () => ({
    type: USER_LOGOUT,
  }),
};

const Operation = {
  login: (user, funcError) => async (dispatch) => {
    try {
      dispatch(ActionCreator.login.request());
      const response = await api.post(`/login`, user, {
        params: {
          developer: 'Dorosh',
        }
      });
      if (response.data.status === 'error') {
        funcError(response.data.message)
        dispatch(ActionCreator.login.failure(response.data.message));
      } else {
        localStorage.setItem('token', response.data.message.token);
        dispatch(ActionCreator.login.success(response.data));
      }
    } catch (error) {
      dispatch(ActionCreator.login.failure(error.response.message));
    }
  },
  logout: () => async (dispatch) => {
    localStorage.removeItem('token');
    dispatch(ActionCreator.logout());
  },
};

export {ActionCreator, Operation};
