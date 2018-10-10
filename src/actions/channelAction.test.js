import configureMockStore from 'redux-mock-store';
import * as actions from './channelActions';
import apiMiddleware from '../middleware/apiMiddleware';
import fetchMock from 'fetch-mock';
import { CHANNEL_URL } from "../api/chatter";

const middlewares = [apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore()
    });

    const channel = {
        id: "id",
        name: "official",
        subscribers: []
    };

    it('creates ADD_CHANNEL_SUCCESS when posting channel has been done', () => {
        fetchMock.postOnce(CHANNEL_URL, channel);

        const expectedActions = [
            { type: actions.ADD_CHANNEL_REQUEST},
            { type: actions.ADD_CHANNEL_SUCCESS, payload: channel }
        ];
        const store = mockStore();
        store.dispatch(actions.addChannel(channel)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});
