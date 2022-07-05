<template>
  <div>
    {{ title }}
  </div>
  <div :class="$attrs.class">
    {{ message }}
  </div>
  <div>
    {{ name }}
  </div>
  <div>
    {{ age }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SonCpn",
  props: {
    title: {
      type: String,
      value: "",
      //   自定义验证函数
      //   validator(value) {
      //     return typeof value === "number";
      //   },
    },
    message: {
      type: String,
      value: "",
    },
    name: {
      type: String,
      value: {},
    },
    age: {
      type: String,
      value: "",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
