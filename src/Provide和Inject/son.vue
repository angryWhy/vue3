<template>
  <div>
    <h2>我是子组件 Root的Provide值-{{ name }}-{{ age }}-{{ length }}</h2>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SonCpn",
  inject: ["name", "age", "length"],
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
