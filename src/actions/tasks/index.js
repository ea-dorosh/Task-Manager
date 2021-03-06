import {
  TASKS_CHANGE_DIRECTION,
  TASKS_CHANGE_FILTER,
  TASKS_CHANGE_PAGE,
  TASKS_FETCH
} from 'actions/actionTypes';
import {api} from 'api';
import {createActionRequest} from 'utils';

const ActionCreator = {
  fetchTasks: createActionRequest(TASKS_FETCH),
  setActivePage: (activePage) => ({
    type: TASKS_CHANGE_PAGE,
    payload: activePage,
  }),
  setFilter: (filter) => ({
    type: TASKS_CHANGE_FILTER,
    payload: filter,
  }),
  setDirection: (direction) => ({
    type: TASKS_CHANGE_DIRECTION,
    payload: direction,
  }),
};

const Operation = {
  fetchTasks: () => async (dispatch, getState) => {
    try {
      dispatch(ActionCreator.fetchTasks.request());
      const {allTasks} = getState();
      const response = await api.get(`/`, {
        params: {
          developer: 'Dorosh',
          page: allTasks.activePage,
          sort_field: allTasks.filter.sortField,
          sort_direction: allTasks.filter.sortDirection,
        }
      });
      dispatch(ActionCreator.fetchTasks.success(response.data));
    } catch (error) {
      dispatch(ActionCreator.fetchTasks.failure(error.response.message));
    }
  },
};

export {ActionCreator, Operation};
