import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS
 } from "../actions/userActions.js";
import { ADD_USER_ERROR } from "../actions/userActions";

const user = {
    id: "id",
    name: "Alice",
    email: "alice@chatter.com",
    subscriptions: []
};

export const initialState = {
    users: [user],
    loading: false
};

export default function users(
    state = initialState,
    action
  ) {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
          users: state.users,
          loading: true
      };
    case ADD_USER_SUCCESS:
      return {
          users: state.users.concat([action.payload]),
          loading: false
      };
    case ADD_USER_ERROR:
      return {
          ...state,
          error: true,
          loading: false
      };
    default:
      return state;
  }
}