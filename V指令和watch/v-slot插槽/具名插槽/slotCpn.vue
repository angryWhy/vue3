<template>
  <div class="layout">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "VlotCpn",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.layout {
  display: flex;
  justify-content: space-around;
  height: 200px;
  width: 900px;
  margin: 0 auto;
  background-color: aqua;
}
</style>
