import { ADD_CHANNEL_REQUEST, ADD_CHANNEL_SUCCESS } from "../actions/channelActions";

const channel = {
    id: "id",
    name: "Channel",
    subscribers: []
};

export const initialState = [channel];

export default function channels(
    state = initialState,
    action
) {
    switch (action.type) {
        case ADD_CHANNEL_REQUEST:
            return state;
        case ADD_CHANNEL_SUCCESS:
            return state.concat([action.payload]);
        default:
            return state;
    }
}
