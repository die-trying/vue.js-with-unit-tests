export default {
  state: () => {},
  actions: {
    async nuxtServerInit({ commit }, { app }) {
      const menu = await app.$axios.$get('https://borshev.com/die-trying-menu.json');
      commit('the_menu/SET_MENU', menu);
    },
  },
};
