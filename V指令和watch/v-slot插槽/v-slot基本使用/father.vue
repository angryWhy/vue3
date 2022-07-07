<template>
  <div>
    <slot-cpn>
      <!-- 插入内容，替换slot插槽 -->
      <!-- 有插入内容，默认内容不显示的 -->
      <button>插槽button</button>
    </slot-cpn>

    <!-- 没有插入内容，默认显示 -->
    <slot-cpn />

    <!-- 插入多个元素，插槽也有多个 -->
    <!-- 内容导致对应一个slot，如有多个默认，对应多份 -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SlotCpn from "./slotCpn.vue";
export default defineComponent({
  name: "V-slot基本使用",
  components: {
    SlotCpn,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
