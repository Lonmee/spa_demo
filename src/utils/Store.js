import {createStore} from "vuex";

export const store = createStore({
    state: {
        foo: 0,
        token: '',
    },
    mutations: {
        increment(state) {
            state.foo++
        },
        setToken(state, payload) {
            state.token = payload.token;
        }
    }
})
