<template>
  <div>
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
    "tom.name": {
      handler(newInfo, oldInfo) {
        console.log(newInfo, oldInfo);
      },
      deep: true,
    },
  },
  methods: {
    handle() {
      this.tom.name = "jerry";
    },
  },
  created() {
    this.$watch(
      "tom",
      (newInfo, oldInfo) => {
        console.log(newInfo, oldInfo);
      },
      { immediate: true }
    );
  },
});
</script>

<style scoped></style>
