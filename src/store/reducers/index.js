import { combineReducers } from "redux";
import { todos } from "./totos-reducer";

export const rootReducer = combineReducers({
  todos,
});
