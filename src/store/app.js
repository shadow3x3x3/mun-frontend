import TOGGLE_SIDEBAR from './mutation-types';

const app = {
  state: {
    sidebar: true,
  },
  mutations: {
    [TOGGLE_SIDEBAR](state) {
      state.sidebar = !state.sidebar;
    },
  },
  actions: {
    toggleSidebar(context) {
      context.commit('TOGGLE_SIDEBAR');
    },
  },
};

export default app;
