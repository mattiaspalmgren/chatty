const apiMiddleware = () => next => action => {
    const callApi = action["callApi"];
    if (typeof callApi === 'undefined') {
        return next(action);
    }
    const [ pendingType, successType ] = action.types;
    next({type: pendingType});
    return callApi()
        .then(obj => {
            next({
                type: successType,
                payload: obj
            })
        })
}

export default apiMiddleware;