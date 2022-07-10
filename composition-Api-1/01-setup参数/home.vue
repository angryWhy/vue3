<template>
  <div>
    <child message="message">
      <template v-slot:hello> 我是插槽 </template>
    </child>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Child from "./child.vue";
export default defineComponent({
  name: "HomeCpn",
  components: {
    Child,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
