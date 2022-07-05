<template>
  <div>
    <button @click="inc">增加</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FatherCpn",
  //   emits: ["add", "sub"],

  //   对象写法
  emits: {
    add: (name, age) => {
      console.log(name, age);
      //条件成功为true，如果是想要的参数，返回成功
      if (typeof age === "string") return true;
    },
  },

  methods: {
    // vue2使用this.$emits
    // inc() {
    //   this.$emits("add");
    // },
  },
  setup(props, ctx) {
    const inc = () => {
      ctx.emit("add", "name", "age");
    };
    return {
      inc,
    };
  },
});
</script>

<style scoped></style>
