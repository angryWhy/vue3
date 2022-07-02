<template>
  <div>
    <img src="location" />
    <!-- 只当做一个字符串 -->
    <img :src="location" />
    <!-- 动态绑定一个变量 -->

    <!-- 动态绑定class -->
    <div><span :class="{ active: show }">动态绑定class</span></div>

    <!-- 动态绑定class+自己有的class -->
    <div><span class="default" :class="{ active: show }">动态+默认</span></div>

    <!-- 讲对象放到一个单独的属性中 -->
    <div><span class="default" :class="classObj">绑定一个对象</span></div>

    <!-- 将返回的对象放到一个方法中 -->
    <div><span class="default" :class="handleClass()">绑定一个方法</span></div>
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
