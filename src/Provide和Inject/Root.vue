<template>
  <div>
    <father-cpn />
    <button @click="handleClick">添加数组</button>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import FatherCpn from "./father.vue";
export default defineComponent({
  name: "RootCpn",
  components: {
    FatherCpn,
  },
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },

  //   第一种写法，简单的对象形式
  //   provide: {
  //     name: "why",
  //     age: 18,
  //   },

  //   第二种写法，函数形式
  //   provide() {
  //     return {
  //       name: "why",
  //       age: 18,
  //     };
  //   },

  //   结合computed使用
  provide() {
    return {
      name: "why",
      age: 18,
      length: computed(() => this.arr.length),
    };
  },
  methods: {
    handleClick() {
      this.arr.push(1);
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
