import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS
 } from "../actions";

const user = {
    id: "id",
    name: "Alice",
    email: "alice@chatter.com",
    subscriptions: []
}

export function users(
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
        users: state.users.concat([action.user])
      })
    default:
      return state;
  }
}