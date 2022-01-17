<template>
  <div class="login">
    <img alt="Vue logo" src="../../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import api from "@/plugin/api";

export default defineComponent({
  name: "Login",
  setup() {
    onMounted(async () => {
      await api["login/password"]({ account: "hui", password: "123456" });
    });
  },
});
</script>
