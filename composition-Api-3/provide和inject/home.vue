<template>
  <div></div>
</template>

<script>
import { defineComponent, provide, ref, readonly } from "vue";
export default defineComponent({
  name: "HomeCpn",
  setup() {
    const name = ref("wzx");

    //provide注册传入事件

    //使用readonly进行包裹，防止子组件修改，否则调试麻烦
    provide("name", name);

    provide("name", readonly(name));
    return {
      name,
    };
  },
});
</script>

<style scoped></style>
