<template>
  <div>
    <div>
      <span :[name]="show"></span>
    </div>
  </div>
</template>
<!-- v-bind -->
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "V-bind",
  setup() {
    const show = ref(false);
    const name = ref("ccc");
    return {
      show,
      name,
    };
  },
});
</script>

<style scoped></style>
