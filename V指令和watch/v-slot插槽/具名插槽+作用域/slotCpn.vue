<template>
  <div class="layout">
    <div v-for="(item, index) in data" :key="index">
      <slot :item="item" :index="index" name="right"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "VlotCpn",
  props: ["name", "wzx"],
  setup() {
    const data = reactive([
      {
        name: "11",
        age: "aa",
      },
      {
        name: "22",
        age: "bb",
      },
      {
        name: "33",
        age: "cc",
      },
    ]);
    return {
      data,
    };
  },
});
</script>

<style scoped>
.layout {
  display: flex;
  justify-content: space-around;
  height: 200px;
  width: 900px;
  margin: 0 auto;
  background-color: aqua;
}
</style>
