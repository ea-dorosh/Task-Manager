import {ActionCreator} from 'actions/editTask';

const initialState = {
  isLoading: false,
  error: null,
};

export const editTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionCreator.editTask.REQUEST:
      return {...state, isLoading: true, error: null};
    case ActionCreator.editTask.SUCCESS:
      return {...state, isLoading: false};
    case ActionCreator.editTask.FAILURE:
      return {...state, error: action.payload, isLoading: false};
    default:
      return state;
  }
};
