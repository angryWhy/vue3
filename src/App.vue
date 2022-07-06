<template>
  <div>
    <Demo />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Demo from "./事件总线/father.vue";
export default defineComponent({
  components: {
    Demo,
  },
  setup() {},
});
</script>

<style></style>
