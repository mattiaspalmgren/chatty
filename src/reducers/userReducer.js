import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS
 } from "../actions/userActions.js";

const user = {
    id: "id",
    name: "Alice",
    email: "alice@chatter.com",
    subscriptions: []
}

export default function users(
    state = {
        users: [user]
    },
    action
  ) {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return state;
    case ADD_USER_SUCCESS:
      return Object.assign({}, state, {
        users: state.users.concat([action.payload])
      })
    default:
      return state;
  }
}