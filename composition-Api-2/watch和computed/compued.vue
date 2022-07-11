<template>
  <div></div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "ComputedCpn",
  setup() {
    const name = ref("hello");
    const age = ref(18);
    //不是响应式的
    const obj = name.value + age.value;

    //使用computed进行包裹，能够进行响应式,返回的是ref对象
    const newObj = computed(() => name.value + age.value);

    //方式二：使用对象形式
    const newObj2 = computed({
      get: () => name.value + age.value,
      set: (newValue) => {
        const res = newValue;
        name.value = res;
      },
    });
    return { obj, newObj, newObj2 };
  },
});
</script>

<style scoped></style>
