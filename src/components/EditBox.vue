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
    <template v-if="curLayer.type === LAYER_TYPES.TEXT">
      <div class="font-size-editor">
        <span>字号</span>
        <el-input-number v-model="curLayer.fontSize" :min="1" controls-position="right" size="mini"></el-input-number>
      </div>
      <div class="color-editor">
        <span>颜色</span>
        <el-color-picker v-model="curLayer.color" :predefine="predefineColors" size="mini"></el-color-picker>
      </div>
      <div class="font-style-editor">
        <i
          class="iconfont icon-ct"
          :class="{active:curLayer.bold}"
          @click="curLayer.bold=!curLayer.bold"
        ></i>
        <i
          class="iconfont icon-xt"
          :class="{active:curLayer.italic}"
          @click="curLayer.italic=!curLayer.italic"
        ></i>
        <i
          class="iconfont icon-xiahuaxian"
          :class="{active:curLayer.underline}"
          @click="curLayer.underline=!curLayer.underline"
        ></i>
      </div>
    </template>
    <template v-if="LAYER_TYPES.SVG">
      <div class="color-editor">
        <span>背景颜色</span>
        <el-color-picker v-model="curLayer.bgColor" :predefine="predefineColors" size="mini"></el-color-picker>
      </div>
      <div class="color-editor">
        <span>边框颜色</span>
        <el-color-picker v-model="curLayer.bdColor" :predefine="predefineColors" size="mini"></el-color-picker>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { LAYER_TYPES } from "../layer/common";

export default {
  data() {
    return {
      LAYER_TYPES,
      predefineColors: [
        "#ffffff",
        "#000000",
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585"
      ]
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

    &.font-style-editor {
      height: auto;
      i {
        margin-right: 10px;
        padding: 5px;
        border-radius: 4px;
        font-size: 20px;
        cursor: pointer;

        &.active {
          color: #187cea;
          background-color: #ddd;
        }
      }
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