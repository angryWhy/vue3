<template>
  <div>
    <suspense>
      <template #default> 显示内容 </template>
      <template #fallback> default无法显示，显示这里的 </template>
    </suspense>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Suspense",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
