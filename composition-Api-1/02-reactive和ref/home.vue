<template>
  <div>
    <h2>{{ value.count }}</h2>
    <button @click="btnClick">增加</button>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "HomeCpn",
  setup() {
    // reactive必须为数组或者对象，！！！不能传入基本类型
    const value = reactive({ count: 0 });
    //ref可响应式的引用
    //template使用ref对象时候，自动解包
    const title = ref(0);
    const btnClick = () => {
      value.count += 1;
    };
    return { btnClick, value, title };
  },
});
</script>

<style scoped></style>
