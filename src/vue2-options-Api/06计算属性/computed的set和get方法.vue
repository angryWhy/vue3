<template>
  <div>
    {{ concatName }}
  </div>
  <div>
    {{ reverseName }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComputedApply",
  data() {
    return {
      firstName: "tom",
      lastName: "Jerry",
    };
  },
  computed: {
    concatName: {
      get: function () {
        return this.firstName + this.lastName;
      },
    },
    reverseName() {
      return (this.firstName + " " + this.lastName)
        .split(" ")
        .reverse()
        .join(" ");
    },
  },
});
</script>

<style scoped></style>
