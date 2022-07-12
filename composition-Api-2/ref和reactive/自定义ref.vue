<template>
  <div>
    <input v-model="message" />
    {{ message }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
import debounceRef from "./customRef";
export default defineComponent({
  name: "CustomRef",
  setup() {
    const message = debounceRef("helloworld");
    return {
      message,
    };
  },
});
</script>

<style scoped></style>
