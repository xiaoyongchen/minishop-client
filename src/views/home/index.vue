<template>
  <div class="home">
    <div class="title">首页</div>
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
  .title {
    color: red;
    @include safeUp();
  }
}
</style>
