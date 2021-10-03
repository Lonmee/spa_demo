const
    // HOST_TYPE = 'proxy', // using vite proxy
    HOST_TYPE = 'local',
    // HOST_TYPE = 'remote',
    PROXY_HOST = 'api/',
    LOCAL_HOST = 'https://localhost:8081/',
    REMOTE_HOST = 'https://localhost/api/';

/**
 * cros情况下axios需手动添加"withCredentials: true"
 * 以便get请求携带cookie
 * @param type
 * @returns {string}
 */
function host(type) {
    switch (type) {
        case 'proxy':
            return PROXY_HOST;
        case 'local':
            return LOCAL_HOST;
        case 'remote':
            return REMOTE_HOST;
    }
}

export const API = {
    USERS_V1: host(HOST_TYPE) + '1/users/',
    SIGN: host(HOST_TYPE) + '1/log/'
}