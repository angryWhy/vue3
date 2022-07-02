<template>
  <div>
    <h2>v-cloak</h2>
    <div v-cloak>{{ message }}</div>
  </div>
</template>
<!-- v-cloakl，解析前加上cloak，相当于添加属性display：none等组件实例化完毕把这个属性去除 -->
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "V-Cloak",
  setup() {
    const message = ref("v-cloak");
    return {
      message,
    };
  },
});
</script>

<style scoped></style>
