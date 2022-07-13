<template>
  <div>
    <input v-focus />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "VFocus",
  directives: {
    focus: {
      mounted(el, bindings, vnode, preVnode) {
        el.focus();
        //bindings就是一些修饰符和参数
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
