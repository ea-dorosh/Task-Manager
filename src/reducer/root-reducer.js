import {combineReducers} from 'redux';
import {taskReducer} from 'reducer/tasks';
import {addTaskReducer} from 'reducer/addTask';
import {userReducer} from "reducer/user";
import {editTaskReducer} from "reducer/editTask";

export const rootReducer = combineReducers({
  allTasks: taskReducer,
  addTask: addTaskReducer,
  editTask: editTaskReducer,
  user: userReducer,
});
