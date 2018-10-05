const PORT = '8080';
const API_ROOT = `http://localhost:${PORT}`;
export const USER_URL = `${API_ROOT}/admin/users/`;
const postUser = (payload) => fetch(
    USER_URL,
    {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json());

const chatter = { postUser };
export default chatter;
