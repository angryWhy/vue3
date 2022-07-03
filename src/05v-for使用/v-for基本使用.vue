<template>
  <div>
    <!-- 可以配合template使用 -->

    <!-- 遍历数组 -->
    <div>
      <ul v-for="(item, index) in arr" :key="item">
        <li>{{ index + 1 + item }}</li>
      </ul>
    </div>

    <!-- 遍历对象 -->
    <div>
      <ul v-for="(value, key) in obj" :key="value">
        <li>{{ value + key }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "V-if",
  setup() {
    const arr = ref(["123", "456", "789"]);
    const obj = ref({
      name: "tom",
      age: "18",
    });
    return {
      arr,
      obj,
    };
  },
});
</script>

<style scoped></style>
