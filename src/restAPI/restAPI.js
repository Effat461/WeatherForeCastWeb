export const restAPI = {
    get
}
function get(url) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(url, requestOptions).then(handleResponse);
}