import axios from "axios";

const host = {
    PROXY: '/api',
    LOCAL: 'https://localhost:8081',
    REMOTE: 'https://localhost/api',
}
axios.defaults.baseURL = host.LOCAL;
// 默认情况下，跨源请求不提供凭据(cookie、HTTP认证及客户端SSL证明等)。
axios.defaults.withCredentials = axios.defaults.baseURL !== host.PROXY;
// axios.defaults.auth = {
//     username: '',
//     password: '',
// };

export const API = {
    USERS_V1: '/1/users',
    SIGN: '/1/log',
}

