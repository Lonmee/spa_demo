import axios from "axios";

const baseURL = 'http://www.eyolo.com:8081/';

export function sendVerifySmsLoginReq(params, cb = null) {
    console.log('sendVerifySmsLoginReq called', params, cb);
    cb();
    // axios.request({
    //     baseURL, url: '/security/sendVerifySmsLogin', params
    // })
    //     .then(r => r.json()
    //         .then(j => cb && cb(j))
    //         .catch(e => console.log('json parse error: ' + e)))
    //     .catch(e => console.log(e));
}

export function loginReq(params, cb = null) {
    console.log('loginReq called', params, cb);
    cb();
    // axios.request({
    //     method: 'POST',
    //     data: JSON.stringify(params)
    // })
    //     .then(r => r.json()
    //         .then(j => cb && cb(j))
    //         .catch(e => console.log('json parse error: ' + e)))
    //     .catch(e => console.log(e));
}
