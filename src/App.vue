<template>
  <div>
    <Demo />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Demo from "../V指令和watch/v-slot插槽/独占默认插槽/father.vue";
export default defineComponent({
  components: {
    Demo,
  },
  setup() {},
});
</script>

<style></style>
