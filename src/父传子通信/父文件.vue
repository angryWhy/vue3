<template>
  <div>
    <son-cpn title="haha" :message="message" v-bind="obj" class="wzx" />
    使用v-bind，传递整个对象，
    <!-- 子组件接收的时候，是解构之后的 -->

    <!-- attribute的继承，如果在子组件上添加class，name子组件根节点上就会多出这个class类 -->
    <son-cpn title="haha" :message="message" v-bind="obj" class="wzx" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import SonCpn from "./子文件.vue";
export default defineComponent({
  name: "FatherCpn",
  // 不让在子组件添加得attribute自动继承
  inheritAttrs: false,
  components: {
    SonCpn,
  },
  setup() {
    const message = ref("111");
    const obj = ref({
      name: "wa",
      age: "18",
    });
    return {
      message,
      obj,
    };
  },
});
</script>

<style scoped></style>
