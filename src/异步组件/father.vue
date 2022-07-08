<template>
  <div></div>
</template>

<script>
import sonVue from "@/动态组件/son.vue";
import { defineAsyncComponent, defineComponent } from "vue";

//第一种直接使用
const AsyncSon = defineAsyncComponent(() => import("./son.vue"));
//第二种使用对象
const AsyncSonCpn = defineAsyncComponent({
  loader: () => "./SonCpn.vue",
  loadingComponent: sonVue,
});
export default defineComponent({
  name: "FatherCpn",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
