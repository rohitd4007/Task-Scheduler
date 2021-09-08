import { combineReducers } from "redux";
import taskReducers from "./taskReducers";

const reducers = combineReducers({
  allTasks: taskReducers,
});

export default reducers;
