import Vue from 'vue';
import Vuex from 'vuex';

import moduleApp from './app/store';

import getters from './getter';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleApp,
  },
  getters,
});