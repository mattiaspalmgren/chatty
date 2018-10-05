import chatter from '../api/chatter.js';

const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
const addUser = (user) => ({
    types: [ADD_USER_REQUEST, ADD_USER_SUCCESS],
    callApi: () => chatter.postUser(user)
})

export { ADD_USER_REQUEST, ADD_USER_SUCCESS, addUser }
