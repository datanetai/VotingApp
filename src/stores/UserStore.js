import { defineStore } from "pinia";
export const UserStore =defineStore(    "UserStore",
{
    state: () => {  
        return{
            user: null,
            isLoggedIn: false,
            isLoading: false,
            error: null
    };
},
    getters: {
        getUser: state => {
            return state.user;
        },
        getIsLoggedIn: state => {
            return state.isLoggedIn;
        },
        getIsLoading: state => {
            return state.isLoading;
        },
        getError: state => {
            return state.error;
        }
    },
        actions: {
        async login(state, { email, password }) {
            state.isLoading = true;
            state.error = null;

            try {
                const user = await this.call("UserService.login", { email, password });
                state.user = user;
                state.isLoggedIn = true;
            } catch (error) {
                state.error = error;
            } finally {
                state.isLoading = false;
            }
        },
        async logout(state) {
            state.isLoading = true;
            state.error = null;

            try {
                await this.call("UserService.logout");
                state.user = null;
                state.isLoggedIn = false;
            } catch (error) {
                state.error = error;
            } finally {
                state.isLoading = false;
            }
        }
    }
    });