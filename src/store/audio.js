import axios from "axios";
export const audio = {
    state: () => ({
        currentTrack: {},
        instance: null,
        isPlaying: false
    }),
    getters: {
        getCurrentTrack(state) {
            return state.currentTrack;
        },
        getInstance(state) {
            return state.instance;
        },
        isPlayingNow(state) {
            return state.isPlaying
        }
    },
    mutations: {
        changeCurrentTrack(state, data) {
            state.currentTrack = data;
        },
        changeInstance(state, data) {
            state.instance = data;
            state.isPlaying = !state.isPlaying;
        },
        changePlaying(state, data) {
            state.isPlaying = data;
        }
    },
    actions: {
        async getAllTracks(state) {
            const token = state.getters.getToken;
            
            const { data } = await axios
                .get(`${import.meta.env.VITE_BACKEND_URL}/api/audio/`, {
                    headers: {
                        Authorization: token
                    }
                });
            
                return data;
        },
        async makeFavourite(state, data) {
            const { trackId, favourite } = data;
            const token = state.getters.getToken;

            const req = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/audio/favourite`, { trackId, favourite }, {
                headers: {
                    Authorization: token
                }
            })
            
            return req.status === 200;
        },
        startPlaying(state, data = {}) {
            const { props, instance } = data;
            const stateInstance = state.getters['getInstance'];
            /* если текущий трек совпадает с приходящим */
            if(stateInstance === instance || !props) {
                const paused = stateInstance.paused;

                paused ? stateInstance.play() : stateInstance.pause();
                   
                state.commit('changePlaying', paused);
            }

            else {
                if(stateInstance) {
                    stateInstance.currentTime = 0;
                    stateInstance.pause();
                }

                state.commit('changeCurrentTrack', props);
                state.commit('changeInstance', instance);
                instance.play();

                state.commit('changePlaying', true);
            }


        }
    }
}