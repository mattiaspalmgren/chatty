const apiMiddleware = () => next => action => {
    const callApi = action["callApi"];
    if (typeof callApi === 'undefined') {
        return next(action);
    }
    const [ pendingType, successType, errorType ] = action.types;
    next({type: pendingType});
    return callApi()
        .then(handleErrors)
        .then(res => {
            next({
                type: successType,
                payload: res
            })
        })
        .catch(() => {
            next({
                type: errorType,
            })
    });
};

const handleErrors = (res) => {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res.json(res);
};

export default apiMiddleware;