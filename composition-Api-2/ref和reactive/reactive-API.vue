<template>
  <div>
    <h2>isProxy---是否由reactive创建或者readonly创建</h2>
  </div>
</template>

<script>
import {
  defineComponent,
  isProxy,
  isReactive,
  isReadonly,
  reactive,
  readonly,
  shallowReactive,
  shallowReadonly,
} from "vue";
export default defineComponent({
  name: "ReactiveApi",
  setup() {
    const count = reactive({ value: 1 });

    const readonlyCount = readonly(count);

    //shallowReactive只对自身(浅层)是响应式，深层为原生对象
    const shallowCount = shallowReactive(count);

    //shallowReadonly只对自身(浅层)是只读的，深层可以更改
    const shallowReadonlyCount = shallowReadonly(count);

    console.log(
      `isProxy---是否由reactive创建或者readonly创建的Proxy`,
      isProxy(count),
      isProxy(readonlyCount)
    );
    console.log(
      `isReactive---是否由reactive创建或者readonly包裹`,
      isReactive(count),
      isReactive(readonlyCount)
    );
    console.log(
      `isReadonly---是否是readonly`,
      isReadonly(count),
      isReadonly(readonlyCount)
    );
    console.log(
      `isReadonly---是否是readonly`,
      isReadonly(count),
      isReadonly(readonlyCount)
    );
    return { count, shallowCount, shallowReadonlyCount };
  },
});
</script>

<style scoped></style>
