<template>
  <div>
    <h2>{{ info.name }}</h2>
    <button @click="changeData">修改name</button>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, watch } from "vue";
export default defineComponent({
  name: "WatchUse",
  setup() {
    const info = reactive({ name: "wzx", age: "20" });
    const count = ref(0);

    //方式一：使用getter函数，侦听具体属性的时候使用
    watch(
      () => info.name,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
    );
    //方式二：直接传入侦听对象
    watch(info, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    //方式三：如果想拿到一个普通对象，新旧值不相同
    watch(
      () => {
        //解构取消响应式，toRefs的API
        return { ...info };
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
    );
    //方式四：侦听多个对象
    watch([info, count], ([nInfo, nCount], [oInfo, oCount]) => {
      console.log([nInfo, nCount], [oInfo, oCount]);
    });
    //方式五：侦听具体的对象
    watch(
      [() => info.name, () => count],
      ([nInfo, nCount], [oInfo, oCount]) => {
        console.log([nInfo, nCount], [oInfo, oCount]);
      }
    );
    //变成普通对象同理

    //watch,如果是reactive对象，自动为true
    watch(
      () => ({ ...info }),
      (newInfo, oldInfo) => {
        console.log(newInfo, oldInfo);
      },
      {
        deep: true,
        // 第一次就执行一次
        immediate: true,
      }
    );
    const changeData = () => {
      info.name = "why";
    };
    return {
      info,
      changeData,
    };
  },
});
</script>

<style scoped></style>
