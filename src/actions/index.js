export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const addUserRequest = (user) => ({
    type: ADD_USER_REQUEST,
    user
});

export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const addUserSuccess = (user) => ({
    type: ADD_USER_SUCCESS,
    user
});

export const addUser = (user) => {
    return function (dispatch) {
        dispatch(addUserRequest)
        return fetch("http://localhost:8080/admin/users", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: new Headers({'content-type': 'application/json'}),
        }).then(response => response.json())
          .then(user => {
              dispatch(addUserSuccess(user));
          })
    }
}