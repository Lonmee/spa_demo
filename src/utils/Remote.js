import axios from "axios";

const baseURL = 'http://www.eyolo.com:8081/';

export async function sendVerifySmsLoginReq(params) {
    axios.request({
        baseURL, url: '/security/sendVerifySmsLogin', params
    })
        .then(r => r.json())
        .catch(e => console.log(e));
}

export async function loginReq(params, cb = null) {
    axios.request({
        method: 'POST',
        baseURL,
        url: '',
        data: JSON.stringify(params)
    })
        .then(r => r.json())
        .catch(e => console.log(e));
}
