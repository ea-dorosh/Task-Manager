import {ActionCreator} from 'actions/addTask';

const initialState = {
  isLoading: false,
  error: null,
};

export const addTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionCreator.addTask.REQUEST:
      return {...state, isLoading: true, error: null};
    case ActionCreator.addTask.SUCCESS:
      return {...state, isLoading: false};
    case ActionCreator.addTask.FAILURE:
      return {...state, error: action.payload, isLoading: false};
    default:
      return state;
  }
};
