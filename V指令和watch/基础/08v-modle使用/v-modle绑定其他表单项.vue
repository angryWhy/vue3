<template>
  <div>
    <input v-model="message" />
    <!-- 等价于 -->
    <input :value="message" @input="message = $event.target.value" />
    <div>111<input type="checkbox" v-model="agree" />同意协议</div>
    <div>
      checkbox
      <div>
        <input v-model="hobbies" value="foot" type="checkbox" />
        <input v-model="hobbies" value="head" type="checkbox" />
        <input v-model="hobbies" value="finger" type="checkbox" />
      </div>
      <div>{{ hobbies }}</div>
    </div>
    <div>
      select
      <select v-model="fruit" multiple size="2">
        <option value="apple">苹果</option>
        <option value="banana">香蕉</option>
        <option value="watermelon">西瓜</option>
      </select>
      <div>{{ fruit }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "V-modle",
  setup() {
    const message = ref("");
    const agree = ref(true);
    const hobbies = ref([]);
    const fruit = ref([]);
    return {
      message,
      agree,
      hobbies,
      fruit,
    };
  },
});
</script>

<style scoped></style>
