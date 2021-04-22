import { createStore } from "vuex";

export default createStore({
  state: {
    isAuth: false,
  },
  mutations: {
    setAuth: (state, payload) => {
      // const { isAuth } = payload;
      // console.log('hello from mutation', payload)
      state.isAuth = payload
    },
  },
  actions: {},
  modules: {},
});
