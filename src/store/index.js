import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pdTotal: 0,
    cartList: [],
    listShow: false,
  },
  getters: {
  },
  mutations: {
    setCartList(state, [num, id]) {
      state.pdTotal += num;
      if (num === 1) {
        state.cartList.push(id);
      } else {
        const removeIndex = state.cartList.findIndex((item) => item === id);
        state.cartList.splice(removeIndex, 1);
      }
    },

    setListStatus(state) {
      state.listShow ? (state.listShow = false) : (state.listShow = true);
    }
  },
  actions: {
  },
  modules: {
  }
})
