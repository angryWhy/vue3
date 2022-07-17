<template>
  <div>
    <Demo />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Demo from "../nextTick/nextTick.vue";
export default defineComponent({
  components: {
    Demo,
  },
});
</script>

<style></style>
