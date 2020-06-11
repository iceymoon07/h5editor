<template>
  <header class="editor-header">
    <button class="back-to-home-button" @click="$router.push('/')">
      <i class="iconfont icon-zuo"></i>
      <span>返回首页</span>
    </button>
    <div class="panel">
      <div
        class="panel-option"
        v-for="item in LAYER_PANEL_LIST"
        :key="item.name"
        @click="handleClickPanel(item)"
      >
        <i :class="item.iconClass"></i>
        <div>{{item.name}}</div>
      </div>
    </div>
    <button class="goto-preview-button" @click="$router.push(`/preview/${$route.params.id}`)">
      <i class="iconfont icon-yulan"></i>
      <span>进入预览</span>
    </button>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import TextLayer from "../layer/TextLayer";
import ImageLayer from "../layer/ImageLayer";

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
  computed: {
    ...mapState("editor", ["layerList"])
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
  border-bottom: 1px solid #c2c2c2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    height: 100%;
    padding: 10px;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #1593ff;
    }

    * {
      font-size: 20px;
    }
  }

  .panel {
    display: flex;
    height: 100%;

    .panel-option {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
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