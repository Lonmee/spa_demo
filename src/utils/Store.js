import {createStore} from "vuex";

export const store = createStore({
    state() {
        return {
            foo: 0,
            token: '',
            areaCode: ''
        }
    },
    mutations: {
        increment(state) {
            state.foo++
        },
        setToken(state, payload) {
            state.token = payload.token;
        },
        setArea(state, mobileCode) {
            state.areaCode = mobileCode;
        }
    }
})
