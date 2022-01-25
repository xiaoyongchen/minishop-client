<template>
  <div class="home">
    <div class="title" v-safeInset.paddingTop="28">首页11</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
.home {
  height: 100vh;
  .title {
    @include safeUp();
  }
}
</style>
