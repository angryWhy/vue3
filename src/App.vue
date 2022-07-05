<template>
  <div>
    <Demo />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Demo from "./子传父通信/父文件.vue";
export default defineComponent({
  components: {
    Demo,
  },
  setup() {},
});
</script>

<style></style>
