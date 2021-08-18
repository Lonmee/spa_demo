import axios from "axios";

const baseURL = 'http://www.eyolo.com:8081/';

async function sendVerifySmsLoginReq(params) {
    axios.request({
        baseURL, url: '/security/sendVerifySmsLogin', params
    })
        .then(r => r.json())
        .catch(e => console.log(e));
}

async function loginReq(params) {
    axios.request({
        method: 'POST',
        baseURL,
        url: '',
        data: JSON.stringify(params)
    })
        .then(r => r.json())
        .catch(e => console.log(e));
}

export {sendVerifySmsLoginReq, loginReq};
