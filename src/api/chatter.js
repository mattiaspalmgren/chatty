const API_ROOT = env.CHATTER_API_URL;
export const USER_URL = `${API_ROOT}/admin/users/`;
const postUser = (payload) => fetch(
    USER_URL,
    {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    });

export const CHANNEL_URL = `${API_ROOT}/admin/channels/`;
const postChannel = (payload) => fetch(
    CHANNEL_URL,
    {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    });

const chatter = { postUser, postChannel };
export default chatter;
