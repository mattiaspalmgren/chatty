import chatter from '../api/chatter.js';

const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
const ADD_USER_ERROR = 'ADD_USER_FAILURE';
const addUser = (user) => ({
    types: [ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_ERROR],
    callApi: () => chatter.postUser(user)
});

export { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_ERROR, addUser }
