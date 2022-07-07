<template>
  <div>子组件</div>
</template>

<script>
import { defineComponent } from "vue";
import emitter from "./eventbus";
export default defineComponent({
  name: "SonCpn",
  created() {
    emitter.on("Father", (info) => {
      console.log(info);
    });
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
