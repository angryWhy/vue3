<template>
  <div v-for="tab in arr" :key="tab">
    <button @click="handleShow(tab)">{{ tab }}</button>
  </div>
  <keep-alive>
    <component :is="currentTab"></component>
  </keep-alive>
</template>

<script>
import { defineComponent, ref } from "vue";
import Child from "./child.vue";
import Son from "./son.vue";
export default defineComponent({
  name: "FatherCpn",
  components: {
    Child,
    Son,
  },
  setup() {
    const arr = ref(["child", "son"]);
    const currentTab = ref("child");
    const handleShow = (tab) => {
      currentTab.value = tab;
    };
    return { arr, handleShow, currentTab };
  },
});
</script>

<style scoped></style>
