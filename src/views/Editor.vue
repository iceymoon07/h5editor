<template>
  <div class="editor">
    <header>
      <span class="logo">h5Editor</span>
      <span class="panel">
        <span class="panel-option">
          <i class="iconfont icon-wenben"></i>
          <span>文本</span>
        </span>
        <span class="panel-option">
          <i class="iconfont icon-tupian"></i>
          <span>图片</span>
        </span>
        <span class="panel-option">
          <i class="iconfont icon-xingzhuang-juxing"></i>
          <span>形状</span>
        </span>
      </span>
      <span class="operation">操作</span>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.editor {
  height: 100vh;
  background-color: #eee;

  header {
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      padding: 10px;
      height: 60px;
    }

    .panel {
      display: flex;
      height: 60px;
      .panel-option {
        display: flex;
        flex-direction: column;
        align-items: center;
        //padding: 10px;
        margin-right: 10px;
        cursor: pointer;
        &:hover {
          background-color: #1593ff;
          color: #fff;
        }
      }
    }
    .operation {
      height: 60px;
    }
  }
}
</style>