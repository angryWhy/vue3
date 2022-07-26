<template>
  <div>
    <cpn v-model:form.caps="form" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import cpn from "./cpn.vue";
export default defineComponent({
  components: {
    cpn,
  },
  setup() {
    const form = ref({
      name: "kelly",
      gae: "eight",
      sex: "man",
    });
    return {
      form,
    };
  },
});
</script>

<style scoped>
</style>