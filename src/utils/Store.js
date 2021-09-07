import {createStore} from "vuex";
import {Cookie} from "./Cookie";
import axios from "axios";
import {API} from "./Remote";

export const store = createStore({
    state: {
        userInfo: {
            name: '',
            age: '',
            sex: ''
        },
        token: Cookie.get('token'),
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload.token;
            Cookie.set('token', payload.token)
            this.dispatch('getUserInfo');
        },
        clearToken(state) {
            state.token = '';
            state.userInfo = {};
            Cookie.clear('token');
        },
        setUserInfo(state, info) {
            state.userInfo = info;
        }
    },
    actions: {
        getUserInfo() {
            axios.get(API.USERS_V1)
                .then(resp => this.commit('setUserInfo', resp.data))
                .catch(console.error);
        }
    }
})
