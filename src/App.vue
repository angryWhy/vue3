<template>
  <div>
    <Demo />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Demo from "./引用元素和组件/father.vue";
export default defineComponent({
  components: {
    Demo,
  },
  setup() {},
});
</script>

<style></style>
