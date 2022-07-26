<template>
  <div></div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  emits: ["update:form"],
  props: {
    form: Object,
    formModifiers: {
      default: () => {},
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>