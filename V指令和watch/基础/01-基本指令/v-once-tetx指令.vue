<template>
  <div>
    <h2>v-once</h2>
    <h2>{{ count }}</h2>
    <div v-once>
      <h2>{{ count }}</h2>
      <h2>{{ count2 }}</h2>
    </div>
    <button @click="handleAdd">+++</button>
    <h2>v-text</h2>
    <div v-text="count"></div>
  </div>
</template>
<!-- v-once，元素或者组件及其所有的子元素视为静态组件跳过渲染 可以进行优化 -->
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "V-once",
  setup() {
    const count = ref(0);
    const count2 = ref(0);
    const handleAdd = () => {
      count.value = count.value + 1;
      count2.value = count2.value + 1;
    };
    return {
      count,
      handleAdd,
      count2,
    };
  },
});
</script>

<style scoped></style>
