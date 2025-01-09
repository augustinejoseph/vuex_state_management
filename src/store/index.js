import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    count: 0,
    colorCode: "red",
  },
  //   Synchronous
  mutations: {
    increaseCounter(state, randomNumber) {
      state.count += randomNumber;
    },
    decreaseCounter(state, randomNumber) {
      state.count -= randomNumber;
    },
    setColorCode(state, newColor) {
      state.colorCode = newColor;
    },
  },
  //   Asynchronous like API calls.
  actions: {
    increaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("increaseCounter", response.data);
      });
    },
    decreaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
      ).then((response) => commit("decreaseCounter", response.data));
    },
  },
  getters: {
    getSquared(state) {
      return state.count * state.count;
    },
  },
  modules: {},
});
