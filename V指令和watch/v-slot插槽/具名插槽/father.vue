<template>
  <div>
    <slot-cpn>
      <template v-slot:left>
        <span>我是左边</span>
      </template>
      <template v-slot:right>
        <span>我是右边</span>
      </template>
      <template v-slot:center>
        <span>我是中间</span>
      </template>
      <!-- 简写形式 -->

      v-slot:替换成#，语法糖

      <!-- <template #left>
        <span>我是左边</span>
      </template> -->
    </slot-cpn>
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
