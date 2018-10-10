import { ADD_CHANNEL_ERROR, ADD_CHANNEL_REQUEST, ADD_CHANNEL_SUCCESS } from "../actions/channelActions";

const channel = {
    id: "id",
    name: "Channel",
    subscribers: []
};

export const initialState = {
    channels: [channel],
    loading: false
};

export default function channels(
    state = initialState,
    action
) {
    switch (action.type) {
        case ADD_CHANNEL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ADD_CHANNEL_SUCCESS:
            return {
                channels: state.channels.concat([action.payload]),
                loading: false
            };

        case ADD_CHANNEL_ERROR:
            return {
                ...state,
                error: true,
                loading: false
            };
        default:
            return state;
    }
}
