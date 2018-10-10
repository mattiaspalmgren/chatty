import configureMockStore from 'redux-mock-store';
import * as actions from './userActions';
import apiMiddleware from '../middleware/apiMiddleware';
import fetchMock from 'fetch-mock';
import { USER_URL } from "../api/chatter";

const middlewares = [apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore()
    });

    const user = {
        name: "alice",
        email: "alice@chatter.com"
    };

    it('creates ADD_USER_SUCCESS when posting user has been done', () => {
        fetchMock.postOnce(USER_URL, user);

        const expectedActions = [
            { type: actions.ADD_USER_REQUEST },
            { type: actions.ADD_USER_SUCCESS, payload: user }
        ];
        const store = mockStore();
        store.dispatch(actions.addUser(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('dispatch ADD_USER_ERROR on failure', () => {
        fetchMock.postOnce(USER_URL, 500);

        const expectedActions = [
            { type: actions.ADD_USER_REQUEST },
            { type: actions.ADD_USER_ERROR }
        ];
        const store = mockStore();
        store.dispatch(actions.addUser(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
});
