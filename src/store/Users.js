import axios from "axios";
import Cookies from 'js-cookie'
import API from "../remote/API";

export const users = {
    state: {
        info: {
            name: '',
            age: '',
            sex: '',
        },
        token: Cookies.get('token'),
    },
    getters: {
        userInfo: (state) => {
            const {name, sex, age} = state.info;
            return `${name}-${sex}-${age}`;
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            Cookies.set('token', token, {expires: 7});
        },
        clearToken(state) {
            state.token = undefined;
            state.info = {};
            Cookies.remove('token');
            this.dispatch('logOut');
        },
        setInfo(state, info) {
            state.info = info;
        }
    },
    actions: {
        signup({commit, dispatch}, params) {
            return new Promise((resolve, reject) => {
                axios.post(API.USERS_V1, params)
                    .then(({status, data, statusText}) => {
                        if (status === 200) {
                            commit('setToken', data.insertedId);
                            dispatch('getUserInfo');
                            resolve(data);
                        } else {
                            reject(statusText);
                        }
                    })
                    .catch(reason => console.error(reason));
            })
        },
        getUserInfo({commit}) {
            axios.get(API.USERS_V1)
                // .then(resp => state.userInfo = resp.data)
                .then(({status, data, statusText}) => {
                    if (status === 200) {
                        commit('setInfo', data);
                    } else {
                        alert(statusText);
                    }
                })
                .catch(console.error);
        },
        login({commit}, params) {
            return new Promise((resolve, reject) => {
                axios.post(API.SIGN, params)
                    .then(({status, data, statusText}) => {
                        if (status === 200) {
                            commit('setToken', data._id);
                            commit('setInfo', data);
                            resolve(data._id);
                        } else {
                            reject(statusText);
                        }
                    })
                    .catch(reason => console.error(reason));
            })
        },
        logOut() {
            axios.delete(API.SIGN)
                .then(resp => resp.status === 200 && console.log('logout'))
                .catch(console.error);
        }
    }
}

