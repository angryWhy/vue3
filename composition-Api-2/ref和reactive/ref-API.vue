<template>
  <div>
    {{ shallowRefObj.name }}
  </div>
  <button @click="changeObj">改变shallowRef</button>
</template>

<script>
import {
  defineComponent,
  isRef,
  ref,
  shallowRef,
  unref,
  triggerRef,
} from "vue";
export default defineComponent({
  name: "ToRefs",
  setup() {
    const count = ref(0);
    const obj = ref({ name: "wzx", age: "20" });

    //unRef-----获取一个ref的引用，取到它的value值，相当于自动解包
    const UnCount = unref(count);

    //isRef-----判断对象是不是ref对象
    const flag = isRef(count);

    //shallowRef-----深层不为响应式，与shallowReactive一样
    const shallowRefObj = shallowRef({ name: "wzx" });

    //triggerRef
    const changeObj = () => {
      shallowRefObj.value.name = "hahahaha";
      //强制触发响应式，轻质更新
      triggerRef(shallowRefObj);
    };

    return {
      UnCount,
      flag,
      obj,
      shallowRefObj,
      changeObj,
    };
  },
});
</script>

<style scoped>
</style>
