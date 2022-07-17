import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  getters: {
    totalPrice(store, getters) {
      let totalPrice = 0;
      return totalPrice + store.count + getters.currentCount;
    },
    currentCount(store) {
      return store.count * 0.5;
    },
    totalPriceCount() {
      //这样写的话，可以和普通调用相比，能传参数，更具有灵活性
      return (argument) => {
        return argument;
      };
    },
  },
});
export default store;
