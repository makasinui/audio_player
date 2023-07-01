export const audio = {
    state: () => ({
        currentTrack: {},
        instance: null
    }),
    getters: {
        getCurrentTrack(state) {
            return state.currentTrack;
        },
        getInstance(state) {
            return state.instance;
        }
    },
    mutations: {
        changeCurrentTrack(state, data) {
            state.currentTrack = data;
        },
        changeInstance(state, data) {
            /* pause previous audio */
            if(state.instance) {
                state.instance.paused ? state.instance.play() : state.instance.pause();
            }
            
            state.instance = data;
        }
    }
}