const PORT = '8080'
const API_ROOT = `http://localhost:${PORT}`;
const USER_URL = '/admin/users/';
const postUser = (payload) => fetch(
    `${API_ROOT}${USER_URL}`,
    {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: new Headers({'content-type': 'application/json'})
    }).then(res => res.json());

const chatter = { postUser };
export default chatter;

