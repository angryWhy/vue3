<template>
  <div></div>
</template>

<script>
import { defineComponent } from "vue";
import useCounter from "./useCounter";
export default defineComponent({
  name: "HomeCpn",
  setup() {
    const { counter, doubleCount, increment, decrement } = useCounter();
    return {
      counter,
      doubleCount,
      increment,
      decrement,
    };
  },
});
</script>

<style scoped></style>
