import {createStore} from "vuex";
import {Cookie} from "./Cookie";

export const store = createStore({
    state: {
        token: Cookie.get('token'),
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload.token;
            Cookie.set('token', payload.token)
        },
        clearToken(state) {
            state.token = '';
            Cookie.clear('token');
        }
    }
})
