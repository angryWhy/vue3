<template>
  <div>
    <Demo />
  </div>
</template>
<script>
import { defineComponent, watchEffect } from "vue";
import Demo from "../composition-Api-2/watch和computed/watch和watchEffect.vue";
export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    //自动收集响应式的依赖
    watchEffect(() => {
      console.log("name:", name.value);
    });
  },
});
</script>

<style></style>
