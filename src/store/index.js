import * as auth from '@/store/modules/auth.js';
import * as profile from '@/store/modules/profile.js';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    profile,
  },
});

export default store;
