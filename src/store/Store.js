import {createStore} from "vuex";
import {users} from "./Users";

export const store = createStore({
    modules: {
        users: users,
    }
})
