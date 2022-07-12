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
    //watchEffect里接受第一个参数，执行副作用
    const stop = watchEffect(
      (onInvalidate) => {
        onInvalidate(() => {
          //副作用执行，清除额外的副作用
          //cancel上次的网络请求
          console.log(`onInvildate副作用执行`);
        });
        console.log("name:", name.value);
        console.log("age:", age.value);
      },
      {
        flush: "post",
      }
    );
    const changeName = () => {
      name.value = "world";
    };
    const changeAge = () => {
      age.value += 1;
      if (age.value > 25) {
        stop();
      }
    };
    //watchEffect,自动收集响应依赖，怎么都会执行一次，刚开始就执行一次

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
