<template>
  <div>
    <h2>哈哈哈哈</h2>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "RefDom",
  setup() {
    const titleRef = ref(null);
    return {
      titleRef,
    };
  },
});
</script>

<style scoped></style>
