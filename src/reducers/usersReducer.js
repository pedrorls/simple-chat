import * as types from "../constants/ActionTypes";

const initialState = [];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return state.concat([
        {
          id: action.id,
          name: action.name
        }
      ]);

    case types.USER_LIST:
      return action.users;

    default:
      return state;
  }
};

export default usersReducer;
