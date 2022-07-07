<template>
  <div>
    <slot-cpn>
      <template v-slot="slotProps">
        <button>
          {{ slotProps.item.name }}---{{ slotProps.item.age }}---{{
            slotProps.index
          }}
        </button>
      </template>
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
