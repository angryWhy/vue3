<template>
  <div>
    <div>
      可以是变量名，值为类名字，可以算元运算符，也可以是嵌套对象
      <span
        class="default"
        :class="[
          'class1',
          variable,
          show ? 'active' : '',
          { active: isactive },
        ]"
        >动态+默认</span
      >
    </div>
    <button @click="handleToggle">切换</button>
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
      };
    };
    return {
      handleToggle,
      location,
      show,
      classObj,
      handleClass,
    };
  },
});
</script>

<style scoped>
.active {
  color: blue;
}
</style>
