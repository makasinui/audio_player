import { createStore } from 'vuex';
import { audio } from './audio';
import { auth } from './auth';
import { album } from './album';

const store = createStore({
    modules: {
        audio,
        auth,
        album
    }
});

export default store;