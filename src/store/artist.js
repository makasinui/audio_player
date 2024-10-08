import axios from "axios";
export const artist = {
    getters: {},
    mutations: {},
    actions: {
        async getAllArtists() {
            const { data } = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/artist/`
            );

            return data;
        },
        async getArtist(store, id) {
            const { data } = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/artist/${id}`
            );

            return data;
        },
    },
};
