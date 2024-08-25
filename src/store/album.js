import axios from "axios";
export const album = {
    getters: {},
    mutations: {},
    actions: {
        async getAllAlbums() {
            const { data } = await axios
                .get(`${import.meta.env.VITE_BACKEND_URL}/api/album/`);
            
                return data;
        },
    }
}