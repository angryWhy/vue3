<template>
  <div>
    <router-view v-slot="props">
      <component :is="props.component"></component>
    </router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "HomeCpn",
  // 如何拿到路由路径后面的值
  //this.$route.params
  //vue3中
  // const route = useRouter()
  //route.params.name

  //编程式导航
  //this.$router.push("/about")

  //useRouter
  //route.push("/home")
  //route.push({
  //   path:"",
  //   query:{
  //     name:"aa",
  //     gae:"18"
  //   }
  // })
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
