<template>
  <div>
    <div v-on:click="handleCLick">v-on</div>
    <div v-on:mouseover="handleCLick">v-on</div>
    <!-- 绑定多个事件 -->
    <div v-on="{ click: handleClick, mouseover: mouseMove }"></div>
    <!-- 参数问题 -->

    <!-- 自动有event对象 -->
    <div v-on:click="handleClick"></div>

    <!-- 多个参数和event对象 -->
    <!-- $event，特定参数形式 -->
    <div v-on:click="handleClick($event, num, age)"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "V-on",
  setup() {
    const handleCLick = () => {};
    return {
      handleCLick,
    };
  },
});
</script>

<style scoped></style>
