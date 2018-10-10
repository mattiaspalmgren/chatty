import chatter from '../api/chatter.js';

const ADD_CHANNEL_REQUEST = 'ADD_CHANNEL_REQUEST';
const ADD_CHANNEL_SUCCESS = 'ADD_CHANNEL_SUCCESS';
const addChannel = (channel) => ({
    types: [ADD_CHANNEL_REQUEST, ADD_CHANNEL_SUCCESS],
    callApi: () => chatter.postChannel(channel)
});

export { ADD_CHANNEL_REQUEST, ADD_CHANNEL_SUCCESS, addChannel }
