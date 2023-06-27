import { createStore } from 'vuex';
import { audio } from './audio';

const store = createStore({
    modules: {
        audio 
    }
});

export default store;