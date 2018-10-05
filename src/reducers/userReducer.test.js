import reducer, { initialState } from './userReducer';
import * as actions from '../actions/userActions';

const user = {
    id: "id",
    name: "Alice",
    email: "alice@chatter.com",
    subscriptions: []
};

describe('user reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ADD_USER_SUCCESS', () => {
        expect(
            reducer(initialState,
                {
                    type: actions.ADD_USER_SUCCESS,
                    payload: user
                }
            )
        ).toEqual({
            ...initialState,
            users: [...initialState.users, user]
        });
    })
});
