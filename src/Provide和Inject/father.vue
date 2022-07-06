<template>
  <div>
    我是父组件
    <son-cpn />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SonCpn from "./son.vue";
export default defineComponent({
  name: "FatherCpn",
  components: {
    SonCpn,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
