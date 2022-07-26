<template>
  <!-- v-model基本使用 -->
  <!-- <input v-model="message" />
    <input :value="message" @input="message = $event.target.value" /> -->

  <!-- v-mode在组件上使用 -->
  <!-- <h2>v-model仅改变值</h2>
    <div>Home组件的-----{{ message }}</div>
    <SonCpn v-model="message" /> -->

  <!-- 自动绑上message,并且自动绑定update -->
  <!-- <SonCpn :modelValue="message" @update:model-value="message = $event" /> -->
  <!-- <h2>子组件原生input</h2>
    title值
    {{ title }}
    <h2>父组件的count值{{ count }}</h2>
    <SonTwo v-model="title" v-model:count="count" />
  </div> -->
  <son-cpn v-model:formData="form" />
</template>

<script>
import { defineComponent, ref } from "vue";
import SonCpn from "./child.vue";

export default defineComponent({
  name: "HomeCpn",
  components: {
    SonCpn,
  },
  setup() {
    const message = ref("v-modle组件使用");
    const title = ref("第二个子组件");
    const count = ref(0);
    const form = ref({
      name: 1,
      age: 2,
    });
    return {
      message,
      title,
      count,
      form,
    };
  },
});
</script>

<style scoped></style>
