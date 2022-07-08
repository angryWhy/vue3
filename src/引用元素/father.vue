<template>
  <div>
    <son-cpn ref="title"></son-cpn>
    <h2 ref="child">原生元素</h2>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SonCpn from "./son.vue";

export default defineComponent({
  name: "FatherCpn",
  components: {
    SonCpn,
  },
  methods: {
    btnClick() {
      //proxy对象
      this.$$refs.title;
      //原生元素
      this.$$refs.child;
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
