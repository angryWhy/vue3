<template>
  <div>
    <div>
      <span v-bind="person"></span>
    </div>
  </div>
</template>
<!-- v-bind -->
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "V-bind",
  setup() {
    const person = ref({
      name: "o",
      age: "20",
    });
    return {
      person,
    };
  },
});
</script>

<style scoped></style>
