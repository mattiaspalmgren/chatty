import reducer, { initialState } from './channelReducer';
import * as actions from '../actions/channelActions';

const channel = {
    id: "id",
    name: "official",
    subscribers: []
};

describe('channel reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ADD_CHANNEL_REQUEST', () => {
        expect(
            reducer(initialState,
                {
                    type: actions.ADD_CHANNEL_REQUEST,
                }
            )
        ).toEqual({
            channels: initialState.channels,
            loading: true
        });
    });

    it('should handle ADD_CHANNEL_SUCCESS', () => {
        expect(
            reducer(initialState,
                {
                    type: actions.ADD_CHANNEL_SUCCESS,
                    payload: channel
                }
            )
        ).toEqual({
            channels: initialState.channels.concat(channel),
            loading: false
        });
    });

    it('should handle ADD_CHANNEL_ERROR', () => {
        expect(
            reducer(initialState,
                {
                    type: actions.ADD_CHANNEL_ERROR,
                }
            )
        ).toEqual({
            ...initialState,
            error: true,
            loading: false
        });
    });
});
