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

    it('should handle ADD_CHANNEL_SUCCESS', () => {
        expect(
            reducer(initialState,
                {
                    type: actions.ADD_CHANNEL_SUCCESS,
                    payload: channel
                }
            )
        ).toEqual(initialState.concat(channel));
    })
});
