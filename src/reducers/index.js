import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

export const chat = combineReducers({
  messagesReducer,
  usersReducer
});
