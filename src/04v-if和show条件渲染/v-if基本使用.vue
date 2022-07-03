<template>
  <div>
    <div v-if="show">if文字</div>
    <div v-show="show">shwo文字</div>
    <button @click="handleClick">切换</button>
  </div>
</template>
<!-- v-show不支持template，不可以和v-else使用 -->
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "V-if",
  setup() {
    const show = ref(false);
    const handleClick = () => {
      show.value = !show.value;
    };
    return {
      show,
      handleClick,
    };
  },
});
</script>

<style scoped></style>
