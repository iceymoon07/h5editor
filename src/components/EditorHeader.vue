<template>
  <header class="editor-header">
    <span class="logo">h5Editor</span>
    <span class="panel">
      <span
        class="panel-option"
        v-for="item in LAYER_PANEL_LIST"
        :key="item.name"
        @click="handleClickPanel(item)"
      >
        <i :class="item.iconClass"></i>
        <span>{{item.name}}</span>
      </span>
    </span>
    <span class="operation">操作</span>
  </header>
</template>

<script>
import TextLayer from "../layer/TextLayer";
import ImageLayer from "../layer/ImageLayer";
import { mapMutations } from "vuex";

const LAYER_PANEL_LIST = [
  {
    name: "文本",
    iconClass: "iconfont icon-wenben",
    layerConstructor: TextLayer
  },
  {
    name: "图片",
    iconClass: "iconfont icon-tupian",
    layerConstructor: ImageLayer
  }
];

export default {
  name: "EditorHeader",
  data() {
    return {
      LAYER_PANEL_LIST
    };
  },
  methods: {
    ...mapMutations("editor", ["addLayer", "setCurLayer"]),
    // 点击面板按钮的事件处理
    handleClickPanel(panel) {
      const { layerConstructor } = panel;
      // 使用相应的构造器创建新的图层实例
      const layerIns = new layerConstructor();
      // 把新的图层实例添加进图层列表
      this.addLayer(layerIns);
      // 把新的图层实例设置为当前选中的图层
      this.setCurLayer(layerIns);
    }
  }
};
</script>

<style lang="less" scoped>
.editor-header {
  height: 60px;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding: 10px;
  }

  .panel {
    display: flex;
    .panel-option {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: auto;
      margin-right: 10px;
      cursor: pointer;
      &:hover {
        background-color: #1593ff;
        color: #fff;
      }
    }
  }
}
</style>