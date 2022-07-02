<template>
  <div>
    <h2>{{ message }}</h2>
    <!-- 字符反转> -->
    <h2>{{ message.split(" ").reverse().join(" ") }}</h2>
    <!-- 表达式 -->
    <h2>{{ count * 10 + 2 }}</h2>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MustaChe",
  setup() {
    const message = ref("Hello world");
    const count = ref(0);
    return {
      message,
      count,
    };
  },
});
</script>

<style scoped></style>
