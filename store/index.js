export default {
  state: () => {},
  actions: {
    async nuxtServerInit({ commit }, { app }) {
      const menu = await app.$axios.$get('categories_tree/');
      commit('the_menu/SET_MENU', menu);
    },
  },
};
