<template>
  <div></div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { mapGetters, mapState, useStore } from "vuex";
export default defineComponent({
  name: "MapState",
  computed: {
    fullNmae() {
      return "kobe";
    },
    //接受一个数组
    ...mapState(["name", "count"]),
    //接受一个对象，可以更改名字
    ...mapState({
      sCounter: (state) => state.counter,
      sName: (state) => state.name,
    }),
    ...mapGetters(["getDCount"]),

    ...mapGetters({
      get1: "name",
      get2: "name2",
    }),
  },
  setup() {
    const store = useStore();
    //setup使用mapState
    const storeState = mapState(["counter", "name", "age"]);
    //如何拿到好多个
    const storeMap = {};
    Object.keys(storeState).forEach((fnKey) => {
      const fn = storeState[fnKey].bind({ $store: store });
      storeMap[fnKey] = computed(fn);
    });
    return {
      ...store,
    };
  },
});
</script>

<style scoped></style>
