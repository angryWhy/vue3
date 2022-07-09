<template>
  <div>
    <son-cpn />
    <h2>{{ message }}</h2>
    <button @click="handleCount">刷新Dom</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import SonCpn from "../生命周期/Cpn.vue";
export default defineComponent({
  name: "ChildCpn",
  components: {
    SonCpn,
  },

  beforeCreate() {
    console.log(`Home-父组件----beforeCreate`);
  },
  created() {
    console.log(`Home-父组件----created`);
  },
  beforeMount() {
    console.log(`Home-父组件----beforeMount`);
  },
  mounted() {
    console.log(`Home-父组件----mounted`);
  },
  beforeUpdate() {
    console.log(`Home-父组件----beforeUpdate`);
  },
  updated() {
    console.log(`Home-父组件----updated`);
  },
  beforeUnmount() {
    console.log(`Home-父组件----beforeUnmount`);
  },
  unmounted() {
    console.log(`Home-父组件----unmounted`);
  },
  setup() {
    const message = ref(0);
    const handleCount = () => {
      message.value += 1;
    };
    return {
      message,
      handleCount,
    };
  },
});
</script>

<style scoped></style>
