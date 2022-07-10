<template>
  <div>
    <h2>{{ readonlyCount.count }}</h2>
    <h2>{{ value.count }}</h2>
    <button @click="btnClick">增加</button>
  </div>
</template>

<script>
import { defineComponent, reactive, readonly } from "vue";

export default defineComponent({
  name: "HomeCpn",
  setup() {
    const value = reactive({ count: 0 });
    const readonlyCount = readonly(value);
    const btnClick = () => {
      readonlyCount.count += 1;
      value.count += 1;
    };
    return { btnClick, readonlyCount, value };
  },
});
</script>

<style scoped></style>
