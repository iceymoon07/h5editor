<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
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