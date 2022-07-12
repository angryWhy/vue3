<template>
  <div></div>
</template>

<script>
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "ChildCpn",
  setup() {
    //provide注册传入事件
    const name = inject("name");
    return {
      name,
    };
  },
});
</script>

<style scoped></style>
