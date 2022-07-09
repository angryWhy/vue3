<template>
  <div>动态组件---SON</div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SonCpn",
  beforeCreate() {
    console.log(`beforeCreate`);
  },

  created() {
    console.log(`created`);
  },
  activated() {
    console.log(`activated`);
  },
  deactivated() {
    console.log(`deactivated`);
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
    return {};
  },
});
</script>

<style scoped></style>
