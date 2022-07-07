<template>
  <div>
    父组件
    <button @click="handleClick">事件总线触发按钮</button>
    <son-cpn />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import emitter from "./eventbus";
import SonCpn from "./son.vue";
export default defineComponent({
  name: "FatherCpn",
  components: {
    SonCpn,
  },
  methods: {
    handleClick() {
      emitter.emit("Father", { name: "wzx", age: "18" });
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
