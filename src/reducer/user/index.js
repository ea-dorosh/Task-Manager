import {ActionCreator} from 'actions/user';
import {USER_LOGOUT} from "actions/actionTypes";

const initialState = {
  authStatus: !!localStorage.getItem('token'),
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionCreator.login.REQUEST:
      return {...state, isLoading: true, error: null};
    case ActionCreator.login.SUCCESS:
      return {...state, isLoading: false, authStatus: true};
    case ActionCreator.login.FAILURE:
      return {...state, error: action.payload, isLoading: false};
    case USER_LOGOUT:
      return {...state, error: null, isLoading: false, authStatus: false};
    default:
      return state;
  }
};
