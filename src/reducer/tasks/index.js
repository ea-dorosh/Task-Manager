import {ActionCreator} from 'actions/tasks';
import {TASKS_CHANGE_PAGE, TASKS_CHANGE_FILTER, TASKS_CHANGE_DIRECTION} from "actions/actionTypes";
import {filterDirections, filterTypes} from "constants/index.js";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  totalTaskCount: null,
  activePage: 1,
  filter: {
    sortField: filterTypes.ID,
    sortDirection: filterDirections.ASC
  }
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionCreator.fetchTasks.REQUEST:
      return {...state, data: [], isLoading: true, error: null};
    case ActionCreator.fetchTasks.SUCCESS:
      return {...state, data: action.payload.message.tasks, totalTaskCount: action.payload.message.total_task_count, isLoading: false};
    case ActionCreator.fetchTasks.FAILURE:
      return {...state, error: action.payload, isLoading: false};
    case TASKS_CHANGE_PAGE:
      return {...state, activePage: action.payload};
    case TASKS_CHANGE_FILTER:
      return {...state, filter: {...state.filter, sortField: action.payload}};
    case TASKS_CHANGE_DIRECTION:
      return {...state, filter: {...state.filter, sortDirection: action.payload}};
    default:
      return state;
  }
};
