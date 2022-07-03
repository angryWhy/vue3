<template>
  <div>
    <h2>v-pre</h2>
    <div v-pre>{{ message }}</div>
  </div>
</template>
<!-- v-pre,跳过编译，直接显示-->
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "V-Html",
  setup() {
    const message = ref("<div>v-html</div>");
    return {
      message,
    };
  },
});
</script>

<style scoped></style>
