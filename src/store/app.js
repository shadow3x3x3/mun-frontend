import * as MT from './mutation-types';

const app = {
  state: {
    sidebar: true,
  },
  mutations: {
    [MT.TOGGLE_SIDEBAR](state) {
      state.sidebar = !state.sidebar;
    },
    [MT.UPDATE_SIDEBAR](state, newStatus) {
      state.sidebar = newStatus;
    },
  },
  actions: {
    toggleSidebar({ commit }) {
      commit(MT.TOGGLE_SIDEBAR);
    },
    updateSidebar({ commit }, newStatus) {
      commit(MT.UPDATE_SIDEBAR, newStatus);
    },
  },
};

export default app;
