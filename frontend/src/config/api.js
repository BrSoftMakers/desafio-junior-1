import axios from 'axios'

function success(res) {
    return res
}

function error(err) {
    if (err.response.status === 401)
        return window.location = '/'
    return Promise.reject(err)
}

axios.interceptors.response.use(success, error)
axios.defaults.baseURL = 'http://localhost:3000';

export default axios