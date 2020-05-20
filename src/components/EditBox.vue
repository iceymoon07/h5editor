<template>
  <div class="edit-box" v-if="curLayer">
    <div class="label">图层设置</div>
    <div class="position-editor">
      <span>X坐标</span>
      <el-input-number v-model="curLayer.x" controls-position="right" size="mini"></el-input-number>
      <span>Y坐标</span>
      <el-input-number v-model="curLayer.y" controls-position="right" size="mini"></el-input-number>
    </div>
    <div class="size-editor">
      <span>宽</span>
      <el-input-number v-model="curLayer.w" :min="10" controls-position="right" size="mini"></el-input-number>
      <span>高</span>
      <el-input-number v-model="curLayer.h" :min="10" controls-position="right" size="mini"></el-input-number>
    </div>
    <div class="fontsize-editor" v-if="curLayer.type === 'TEXT'">
      <span>字号</span>
      <el-input-number v-model="curLayer.fontSize" :min="1" controls-position="right" size="mini"></el-input-number>
    </div>
    <div class="color-editor" v-if="curLayer.type === 'TEXT'">
      <span>颜色</span>
      <el-color-picker v-model="curLayer.color" size="mini"></el-color-picker>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      fontSize: 16,
      color: null
    };
  },
  computed: {
    ...mapState("editor", ["curLayer"])
  }
};
</script>

<style lang="less" scoped>
.edit-box {
  position: absolute;
  right: 0;
  top: 60px;
  width: 360px;
  height: calc(100vh - 60px);
  padding: 10px;
  background-color: #fff;
  border-left: 1px solid #c2c2c2;

  > div {
    padding: 5px;

    &.label {
      padding-top: 0;
      font-weight: bold;
      font-size: 20px;
    }

    &.color-editor {
      display: flex;
      align-items: center;
    }

    > span {
      display: inline-block;
      width: 60px;
      font-size: 14px;
    }

    /deep/ .el-input-number {
      width: 80px;

      &:first-of-type {
        margin-right: 30px;
      }

      input {
        padding: 0 15px;
        text-align: initial;
      }
    }
  }
}
</style>