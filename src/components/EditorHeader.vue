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
      <!-- <span class="panel-option">
        <i class="iconfont icon-tupian"></i>
        <span>图片</span>
      </span>-->
      <!-- <span class="panel-option">
        <i class="iconfont icon-xingzhuang-juxing"></i>
        <span>形状</span>
      </span>-->
    </span>
    <span class="operation">操作</span>
  </header>
</template>

<script>
import TextLayer from "../layer/TextLayer";
import { mapMutations } from "vuex";

const LAYER_PANEL_LIST = [
  {
    name: "文本",
    iconClass: "iconfont icon-wenben",
    layerConstructor: TextLayer
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
    ...mapMutations("editor", ["addLayer"]),
    handleClickPanel(panel) {
      const { layerConstructor } = panel;
      const layerIns = new layerConstructor();
      this.addLayer(layerIns);
    }
  }
};
</script>

<style lang="less" scoped>
.editor-header {
  height: 60px;
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