import {createStore} from "vuex";

export const store = createStore({
    state() {
        return {
            foo: 0
        }
    },
    mutations: {
        increment(state) {
            state.foo++
        }
    }
})