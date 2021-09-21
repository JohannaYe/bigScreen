const screen = {
  state: {
    screenData: {}
  },
  getters: {
    getScreenData(state) {
      return state.screenData;
    }
  },
  mutations: {
    SET_SCREEN_DATA(state, data) {
      state.screenData = data;
    }
  },
  actions: {
    setScreenData({ commit }, data) {
      commit('SET_SCREEN_DATA', data)
    }
  }
}
export default screen;
