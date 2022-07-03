<template>
  <div>
    <div>
      <!-- 对象写法，属性名+值'，或者对象 -->
      <span
        :style="{
          color: color,
          'font-size': '24px',
          'font-size': finialsize + 'px',
        }"
      ></span>

      <!-- 数组语法，放进对象 -->
      <span :style="[styleObject]"> </span>
    </div>
  </div>
</template>
<!-- v-bind -->
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "V-bind",
  setup() {
    const location = ref(0);
    const show = ref(false);
    const color = ref(false);
    const finialsize = ref(16);
    const styleObject = ref({
      color: "red",
    });
    const classObj = ref({
      active: false,
      defalut: false,
    });
    const handleToggle = () => {
      show.value = !show.value;
    };
    const handleClass = () => {
      return {
        active: true,
        default: false,
        color,
        finialsize,
      };
    };
    return {
      handleToggle,
      location,
      show,
      classObj,
      handleClass,
      styleObject,
    };
  },
});
</script>

<style scoped>
.active {
  color: blue;
}
</style>
