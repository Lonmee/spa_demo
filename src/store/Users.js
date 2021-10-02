import {Cookie} from "../utils/Cookie";
import axios from "axios";
import {API} from "../utils/Remote";

export const users = {
    state: {
        info: {
            name: '',
            age: '',
            sex: '',
        },
        token: Cookie.get('token'),
    },
    getters: {
        token: (state) => {
            return state.token;
        },
        userInfo: (state) => {
            const {name, sex, age} = state.info;
            return `${name}-${sex}-${age}`;
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            Cookie.set('token', token)
        },
        clearToken(state) {
            state.token = '';
            state.info = {};
            Cookie.clear('token');
            this.dispatch('logOut');
        },
        setInfo(state, info) {
            state.info = info;
        }
    },
    actions: {
        signup({commit}, params) {
            return new Promise((resolve, reject) => {
                axios.post(API.USERS_V1, params)
                    .then(resp => {
                        const {
                            code,
                            info,
                            msg,
                        } = resp.data;
                        if (code == 200) {
                            commit('setToken', info);
                            resolve(info);
                        } else {
                            reject(msg);
                        }
                    })
                    .catch(reason => console.error(reason));
            })
        },
        getUserInfo({commit}) {
            axios.get(API.USERS_V1)
                // .then(resp => state.userInfo = resp.data)
                .then(({data}) => commit('setInfo', data.info))
                .catch(console.error);
        },
        login({commit}, params) {
            return new Promise((resolve, reject) => {
                axios.post(API.SIGN, params)
                    .then(({data}) => {
                        if (data.code == 200) {
                            commit('setToken', data.info._id);
                            commit('setInfo', data.info);
                            resolve(data._id);
                        } else {
                            reject(data.msg);
                        }
                    })
                    .catch(reason => console.error(reason));
            })
        },
        logOut() {
            axios.delete(API.SIGN)
                .then(console.log)
                .catch(console.error);
        }
    }
}

