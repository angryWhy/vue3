<template>
  <div>Child组件的-----{{ modelValue }}</div>

  <button @click="handleChange">改变值</button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ChildCpn",
  emits: ["update:modelValue"],
  props: ["modelValue"],
  setup(props, ctx) {
    const handleChange = () => {
      ctx.emit("update:modelValue", "新的message");
    };
    return {
      handleChange,
    };
  },
});
</script>

<style scoped></style>
