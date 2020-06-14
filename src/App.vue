<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getLoginState } from "./api/users.js";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    ...mapMutations("user", ["setIsLogin", "setUserName"])
  },
  async mounted() {
    const { isLogin, userName } = await getLoginState();
    this.setIsLogin(isLogin);
    this.setUserName(userName);
  }
};
</script>

<style lang="less">
* {
  // 初始化
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>