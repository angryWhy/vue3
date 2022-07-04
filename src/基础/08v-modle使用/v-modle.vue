<template>
  <div>
    <input v-model="message" />
    <!-- 等价于 -->
    <input :value="message" @input="message = $event.target.value" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "V-modle",
  setup() {
    const message = ref("");
    return {
      message,
    };
  },
});
</script>

<style scoped></style>
