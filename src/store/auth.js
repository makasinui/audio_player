import axios from "axios";
export const auth = {
    state: () => {
        jwt: localStorage.getItem('jwt');
    },
    getters: {
        getToken(state) {
            return state.jwt
        }
    },
    mutations: {
        setToken(state, token) {
            state.jwt = token;
            localStorage.setItem('jwt', token);
        }
    },
    actions: {
        async register(state, req) {
            const { email,password } = req
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, { email, password });
            return data;
        },
    }
}