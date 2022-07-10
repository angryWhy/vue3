<template>
  <div></div>
</template>

<script>
import { defineComponent, reactive, toRef, toRefs } from "vue";
export default defineComponent({
  name: "ToRefs",
  setup() {
    const obj = reactive({ name: "w", age: 20 });
    const obj2 = reactive({ name2: "w", age2: 20 });
    //使用toRefs之后，所有属性都转换成ref对象。建立连接
    let { name, age } = toRefs(obj);
    //使用toRef，针对某个值进行转换成ref响应式值，不能解构了
    let name2 = toRef(obj2, "name2");
    return { obj, name, age, name2 };
  },
});
</script>

<style scoped></style>
