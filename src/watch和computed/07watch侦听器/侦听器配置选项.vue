<template>
  <div>
    <input v-model="message" />
    <span>{{ tom.name }}</span>
    <button @click="handle">切换</button>
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
      tom: {
        name: "tom",
        age: "18",
      },
    };
  },
  watch: {
    message: {
      handler(newInfo, oldInfo) {
        console.log(newInfo, oldInfo);
      },
    },
    tom: {
      handler(newInfo, oldInfo) {
        console.log(newInfo, oldInfo);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    handle() {
      this.tom.name = "jerry";
    },
  },
});
</script>

<style scoped></style>
