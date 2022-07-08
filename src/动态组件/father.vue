<template>
  <div>
    <component :is="child"></component>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Child from "./child.vue";
// import Son from "./son.vue";
export default defineComponent({
  name: "FatherCpn",
  components: {
    Child,
  },
  setup() {
    const child = ref("child");
    return { child };
  },
});
</script>

<style scoped></style>
