import * as auth from '@/store/modules/auth.js';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
  },
});

export default store;
