<template>
  <div>
    <h2>组件开始</h2>
    <slot><span>我是默认内容</span></slot>
    <h2>组件结束</h2>

    <!-- 多个内容情况 -->
    <!-- <h2>组件开始</h2>
    <slot><span>我是默认内容</span></slot>
    <slot><span>我是默认内容</span></slot>
    <slot><span>我是默认内容</span></slot>
    <slot><span>我是默认内容</span></slot>
    <h2>组件结束</h2> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "VlotCpn",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
