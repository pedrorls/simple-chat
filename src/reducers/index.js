import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

export const reducers = combineReducers({
  messagesReducer,
  usersReducer
});
