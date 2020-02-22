import Vue from 'vue';

export default {
  namespaced: true,
  state() {
    return {
      menu: [],
      menu_is_visible: false,
      currentPath: [],
    };
  },
  getters: {
    isMenuVisible: state => state.menu_is_visible,
    getCurrentPath: state => state.currentPath,
    getMenu: state => state.menu,
    getLinkPath: state => state.currentPath.reduce((a,el) => `${a}/${el.slug}`,''),
    isRoot: state => !state.currentPath.length,
    getParent: state => !!state.currentPath.length ? state.currentPath[state.currentPath.length-1] : {id: 0, name: 'Главное меню сайта', thumbnail: ''}, 
    getCurrentMenu: state => {
      let currentMenu = [...state.menu];
      state.currentPath.forEach(el => {
        currentMenu = [...currentMenu].find(item => item.id === el.id).submenu
      });
      return [...currentMenu].sort((a,b) => ('submenu' in a) && !(('submenu' in b)) ? -1 : 0 )
    }
  },
  actions: {
    stepNext({commit}, item) {
      'submenu' in item && commit('STEP_NEXT',item)
    },
    stepPrev({commit}) {
      commit('STEP_PREV')
    },
    stepHome({commit}) {
      commit('STEP_HOME')
    },
    setMenuStep({commit},item) {
      commit('SET_MENU', item)
    },
    setMenuVisible({commit}) {
      commit('SET_VISIBLE', true)
    },
    setMenuHide({commit}) {
      commit('SET_VISIBLE', false)
    },
    setMenuToggle({commit}) {
      commit('SET_VISIBLE')
    }     
  },
  mutations: {
    SET_MENU(state, menu) {
      Vue.set(state, 'menu', menu);
    },
    SET_VISIBLE(state,status=null) {
        state.menu_is_visible = status === null ? !state.menu_is_visible : status
    },
    STEP_NEXT(state, {id,name,slug,thumbnail}) {
      state.currentPath.push({id,name,slug,thumbnail})
    },
    STEP_PREV(state) {
      !!state.currentPath.length && state.currentPath.pop()
    },
    SET_MENU_STEP(state,{id}) {
      const index = state.currentPath.findIndex(el => el.id === id)
      state.currentPath = (index !== -1) ? state.currentPath.slice(0,index) : state.currentPath
    },
    STEP_HOME(state) {
      Vue.set(state,'currentPath', [])
    }
  },
};
