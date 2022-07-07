<template>
  <div>
    <son-cpn @add="addOn" @sub="subOn" />
    {{ message }}
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import SonCpn from "./子文件.vue";
export default defineComponent({
  name: "FatherCpn",
  // 不让在子组件添加得attribute自动继承
  inheritAttrs: false,
  components: {
    SonCpn,
  },
  setup() {
    const message = ref(0);
    const addOn = (name, age) => {
      console.log(name, age);
      message.value = message.value + 1;
    };
    const subOn = () => {
      message.value = message.value - 1;
    };
    return {
      message,
      addOn,
      subOn,
    };
  },
});
</script>

<style scoped></style>
