<template>
  <div>
    <div v-show="show">显示文字</div>
    <button @click="handleClick">切换</button>
  </div>
</template>

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
