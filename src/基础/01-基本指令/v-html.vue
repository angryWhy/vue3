<template>
  <div>
    <h2>v-html</h2>
    <div v-html="message"></div>
  </div>
</template>
<!-- v-html，希望内容被vue解析出来 -->
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
