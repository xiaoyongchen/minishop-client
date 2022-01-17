<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import api from "@/plugin/api";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    onMounted(async () => {
      await api["login/password"]({ account: "hui", password: "123456" });
    });
  },
});
</script>
