import axios from "axios";

/**
 * LOCAL_PROXY: same site with 'api' proxy
 * LOCAL: same site without proxy (CROS)
 * REMOTE_PROXY: remote with 'api' proxy
 * @type {{LOCAL_PROXY: string, LOCAL: string, REMOTE_PROXY: string}}
 */
const host = {
    LOCAL_PROXY: '/api',
    LOCAL: 'https://localhost:8081',
    REMOTE_PROXY: 'https://www.lonmee.com/api',
}
axios.defaults.baseURL = import.meta.env.DEV ? host.LOCAL : host.LOCAL_PROXY;
// 默认情况下，跨源请求不提供凭据(cookie、HTTP认证及客户端SSL证明等)。
axios.defaults.withCredentials = axios.defaults.baseURL === host.LOCAL;
// axios.defaults.auth = {
//     username: '',
//     password: '',
// };
export const API = {
    USERS_V1: '/1/users',
    SIGN: '/1/log',
}