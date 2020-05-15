<template>
  <div class="edit-box" v-if="curLayer">
    <div class="position-editor">
      <span>x坐标</span>
      <el-input-number v-model="curLayer.x" controls-position="right" size="mini"></el-input-number>
      <span>y坐标</span>
      <el-input-number v-model="curLayer.y" controls-position="right" size="mini"></el-input-number>
    </div>
    <div class="size-editor">
      <span>宽</span>
      <el-input-number v-model="curLayer.w" controls-position="right" size="mini"></el-input-number>
      <span>高</span>
      <el-input-number v-model="curLayer.h" controls-position="right" size="mini"></el-input-number>
    </div>
    <div class="fontsize-editor" v-if="curLayer.type === 'TEXT'">
      <span>字号</span>
      <el-input-number v-model="curLayer.fontSize" controls-position="right" size="mini"></el-input-number>
    </div>
    <div class="color-editor" v-if="curLayer.type === 'TEXT'">
      <span>颜色</span>
      <el-color-picker v-model="curLayer.color"></el-color-picker>
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
  background-color: rgb(11, 32, 46);
  width: 350px;
  height: calc(100vh - 60px);
  color: #fff;
}
</style>