const user = {
    id: "id",
    name: "Alice",
    email: "alice@chatter.com",
    subscriptions: []
}

export function users(state = { users: [user] }, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {...state, users: state.users.concat([action.user])}
    default:
      return state
  }
}