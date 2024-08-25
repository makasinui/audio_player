import { createStore } from 'vuex';
import { audio } from './audio';
import { auth } from './auth';

const store = createStore({
    modules: {
        audio,
        auth
    }
});

export default store;