<template>
  <div>
    <!-- 独占默认插槽，可以使用缩写，不能和具名插槽一起使用 -->
    <!-- 直接在组件上用，可以不用带template -->
    <slot-cpn v-slot="slotProps">
      <button>
        {{ slotProps.item.name }}---{{ slotProps.item.age }}---{{
          slotProps.index
        }}
      </button>
    </slot-cpn>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import SlotCpn from "./slotCpn.vue";
export default defineComponent({
  name: "V-slot基本使用",
  components: {
    SlotCpn,
  },
  setup() {
    const name = ref("why");
    const wzx = ref("wzx");
    return {
      name,
      wzx,
    };
  },
});
</script>

<style scoped></style>
