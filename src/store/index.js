import { createStore } from 'vuex';
import { audio } from './audio';
import { auth } from './auth';
import { album } from './album';
import { artist } from './artist';

const store = createStore({
    modules: {
        audio,
        auth,
        album,
        artist
    }
});

export default store;