import axios from "axios";

const baseURL = 'http://localhost:8080/';

async function sendVerifySmsLoginReq(params) {
    axios.request({
        baseURL, url: '/security/sendVerifySmsLogin', params
    })
        .then(r => r.json())
        .catch(e => console.log(e));
}

async function signUpReq(params) {
    axios.request({
        method: 'POST',
        baseURL,
        url: '1/users/',
        data: JSON.stringify(params)
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

export {sendVerifySmsLoginReq, loginReq, signUpReq};
