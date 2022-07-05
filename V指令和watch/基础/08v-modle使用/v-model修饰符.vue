<template>
  <div>
    <!-- <input v-model="message" /> -->
    <!-- 失去焦点，回车键 -->
    <input v-model.lazy="message" />
    <!-- 数值类型 -->
    <input v-model.number="count" />
    <!-- 去除空白符 -->
    <input v-model.trim="message" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "V-modle",
  setup() {
    const message = ref("");
    const count = ref(0);
    return {
      message,
      count,
    };
  },
});
</script>

<style scoped></style>
