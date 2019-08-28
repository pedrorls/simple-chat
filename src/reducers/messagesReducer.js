import * as types from "../constants/ActionTypes";

const INITIAL_STATE = [{}];

export const messagesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      return state.concat([
        {
          message: payload.message,
          author: payload.author,
          id: payload.id
        }
      ]);
    default:
      return state;
  }
};
