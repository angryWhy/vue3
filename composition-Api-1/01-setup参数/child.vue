<template>
  <div>
    <slot name="hello"></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ChildCpn",
  props: ["message"],
  setup(props, { attrs, slots, emit }) {
    console.log(props.message);
    console.log(attrs);
    console.log(slots);
    console.log(emit);
    return {};
  },
});
</script>

<style scoped></style>
