<template>
  <h2></h2>
  <h2></h2>
  <!-- 多根节点必须手动绑定 -->
  <h2 :class="$attrs.class"></h2>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SonCpn",
  props: {},
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
