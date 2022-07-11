<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="changeName">修改name</button>
    <h2>{{ age }}</h2>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect } from "vue";
export default defineComponent({
  name: "WatchEffect",
  setup() {
    const name = ref("hello");
    const age = ref(18);
    const changeName = () => {
      name.value = "world";
    };
    const changeAge = () => {
      age.value = 20;
    };
    //watchEffect,自动收集响应依赖，怎么都会执行一次，刚开始就执行一次
    watchEffect(() => {
      console.log("name:", name.value);
      console.log("age:", age.value);
    });
    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
});
</script>

<style scoped></style>
