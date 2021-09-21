import Vue from 'vue'
import Vuex from 'vuex'
import screen from './modules/screen'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    screen
  },
  state: {
    screen2:{},
    //牧场级
    screen:{},
    //中心级
    selectName: null,
    nowpastrue: null,
    pastureId: '1371082482853961729',
    earId: 8764,
  },
  getters: {},
  mutations: {
    setData(state, data) {
      state.selectName = data

    },
    setData2(state, data) {

      state.nowpastrue = data
    },
    setData3(state, data) {

      state.screen = data
    },
    setData4(state, data) {
      state.screen2 = data
    },
    setData5(state,data){
      state.pastureId = data
    },
    earId(state, data) {
      state.earId = data
    },
  },
  actions: {},
})
