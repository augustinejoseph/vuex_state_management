import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increaseCounter(state) {
        state.count++
      },
      decreaseCounter(state) {
        state.count--
      },
  },
  actions: {},
  getters: {},
  modules: {},
});
