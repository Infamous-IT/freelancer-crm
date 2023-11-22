import { createApp } from 'vue';
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        users: [],
    },
    mutations: {
        SET_USERS_TO_STATE: (state, users) => {
            state.users = users;
        }
    },
    actions: {
        GET_USER_LIST_FROM_SERVER({commit}) {
            return axios('http://localhost:8081/api/users', {
                methods: "GET"
            }).then((users) => {
                commit('SET_USERS_TO_STATE', users.data);
                return users;
            })
        },
    },
    getters: {
        USERS(state) {
            return state.users;
        }
    }
});

export default store;
const app = createApp({});
app.use(store);