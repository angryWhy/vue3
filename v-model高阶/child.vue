 /* eslint-disable */
<template>
  <!-- <div>Child组件的-----{{ modelValue }}</div>

  <button @click="handleChange">改变值</button> -->
  <div>
    <input v-model="formData.name" />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "ChildCpn",
  emits: ["update:modelValue", "update:formData"],
  props: ["modelValue", "formData"],
  setup(props, ctx) {
    const handleChange = () => {
      ctx.emit("update:modelValue", "新的message");
    };
    const formData = ref({ ...props.formData });
    watch(
      formData,
      (newvalue) => {
        console.log(newvalue);
        ctx.emit("update:formData", newvalue);
      },
      {
        deep: true,
      }
    );
    return {
      handleChange,
      formData,
    };
  },
});
</script>

<style scoped></style>
