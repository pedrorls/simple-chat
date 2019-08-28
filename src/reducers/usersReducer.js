import * as types from "../constants/ActionTypes";

const initialState = [{}];

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_USER:
      return state.concat([
        {
          id: payload.id,
          name: payload.name
        }
      ]);

    case types.USER_LIST:
      return payload.user;

    default:
      return state;
  }
};
