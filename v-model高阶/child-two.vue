<template>
  <div>Child组件的-----{{ modelValue }}</div>
  <h2>input原生组件-title值</h2>
  <input v-model="value" />
  <h2>input原生组件-count值</h2>
  <input v-model="countValue" />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ChildCpn",
  emits: ["update:modelValue", "update:count"],
  props: ["modelValue", "count"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    countValue: {
      set(value) {
        this.$emit("update:count", value);
      },
      get() {
        return this.count;
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
