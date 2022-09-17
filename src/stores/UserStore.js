// Language: javascript
// Path: src\stores\UserStore.JS
import { defineStore } from "pinia";
import axios from 'axios'
// import { useLocalStorage } from "@vueuse/core";
// import router from router/index.js
import router from '../router/index.js'

export const UserStore =defineStore("UserStore",
{
    state: () => {  
        return{
            // use localStorage to store the user
            user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
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
        async login(email, password) {
            let path="http://127.0.0.1:5000/users/login";
                // get request
                await axios.post(path, {
                    email: email,
                    password: password
                },
                ).then(res => {
                    // check whether the res is empty
                    if (res.data.length === 0) {
                        console.log("No user found");
                    }
                    // if code 200
                    if (res.status === 200) {
                        // set the user
                        console.log("success");
                        // localStorage
                        localStorage.setItem('user', JSON.stringify(res.data.user));
                        this.user = res.data.user;
                        this.isLoggedIn = true;
                        this.error = null;
                        router.push("/");
                    }   
                    else {
                        console.log("else");
                        this.error = res.data.message;
                    }
                }).catch(err => {
                    console.log(err);

                    // this.error = err.response.data.error;
                }
                );

        },
        async logout(state) {
            let path="http://127.0.0.1:5000/users/login";
            await axios.post(path, {
                email: state.email,
                password: state.password
            }
            ).then(res => {
                // check whether the res is empty
                if (res.data.length === 0) {
                    console.log("No user found");
                }
                // if code 200
                if (res.status === 200) {
                    // set the user
                    console.log("success");
                    // logout
                    localStorage.removeItem('user');
                    this.user = null;
                    this.isLoggedIn = false;
                    this.error = null;
                    router.push("/");

                }   
                else {
                    console.log("else");
                    this.error = res.data.message;
                }
            }
            ).catch(err => {
                console.log(err);

                // this.error = err.response.data.error;
            }
            );
        },
        //signup
        async signup(state, { name, email, password }) {
            state.isLoading = true;
            state.error = null;
            path="http://localhost:3000/api/signup";
            try {
                 //post
                const response = await axios.post(path, {
                    name,
                    email,
                    password
                });
                
                state.user = response.data.user;
                state.isLoggedIn = true;
                state.isLoading = false;
                }
            catch (error) {
                state.error = error.message;
                state.isLoading = false;
            }

    }
    },
    
}
);
