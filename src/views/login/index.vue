<template>
  <div class="login">
    <div @click="login" class="submit-button">登录</div>
    <van-button type="danger">button</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import api from "@/plugin/api";
import qs from "qs";
import { useRouter } from "vue-router";
import { Button } from "vant";

export default defineComponent({
  name: "Login",
  components: {
    [Button.name]: Button,
  },
  setup() {
    const router = useRouter();
    onMounted(() => {
      wxLogin();
    });

    // 拦截路由是否存在code => 微信登录
    const wxLogin = async () => {
      try {
        const query = qs.parse(window.location.href.split("?")[1]);
        const { code } = query || {};
        if (!code) {
          return Promise.reject("不存在微信code");
        }
        const res = await api["login/wechat"]({ code });
        if (res?.data) {
          router.push({ path: "/home" });
        }
      } catch (error) {
        console.log(error);
      }
    };

    const checkForm = async () => {
      try {
        console.log(1);
      } catch (error) {
        console.log(error);
      }
    };

    const login = async () => {
      try {
        const res = await api["login/password"]({
          account: "hui",
          password: "123456",
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    return {
      checkForm,
      login,
    };
  },
});
</script>
<style lang="scss" scope>
.submit-button {
  font-size: 12px;
}
</style>
