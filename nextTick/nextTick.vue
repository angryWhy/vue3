<template>
  <div>
    <h2 class="add" ref="tref">{{ message }}</h2>
    <button @click="btnClick">添加</button>
  </div>
</template>

<script>
import { defineComponent, ref, nextTick } from "vue";
export default defineComponent({
  name: "NextTick",
  setup() {
    const message = ref("message");
    const tref = ref(null);
    const btnClick = () => {
      message.value += "message";
      nextTick(() => {
        console.log(tref.value.offsetHeight);
      });
    };
    return {
      message,
      btnClick,
      tref,
    };
  },
});
</script>

<style scoped>
.add {
  width: 120px;
}
</style>
