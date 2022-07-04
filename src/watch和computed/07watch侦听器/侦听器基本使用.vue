<template>
  <div>
    <input v-model="message" />
  </div>
  <div></div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComputedApply",
  data() {
    return {
      message: "tom",
      lastName: "Jerry",
    };
  },
  watch: {
    message(newVa, old) {
      console.log(newVa, old);
    },
  },
  methods: {},
});
</script>

<style scoped></style>
