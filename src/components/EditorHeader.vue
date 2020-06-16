<template>
  <header class="editor-header">
    <button class="back-to-home-button" @click="$router.push('/')">
      <i class="iconfont icon-zuo"></i>
      <span>返回首页</span>
    </button>
    <div class="panel">
      <div class="panel-option text" @click="handleClickPanelText">
        <i class="iconfont icon-wenben"></i>
        <div>文本</div>
      </div>
      <div class="panel-option image" v-popover:addImagePopover>
        <i class="iconfont icon-tupian"></i>
        <div>图片</div>
      </div>
      <el-popover ref="addImagePopover" placement="bottom" title="选择图片" width="500" trigger="hover">
        <div class="image-selector" :style="imageSelectorStyle">
          <div
            class="image-option"
            :style="imageOptionStyle"
            @click="handleClickImageOption(image.url)"
            v-for="image in images"
            :key="image.name"
          >
            <img :src="image.url" width="100" height="100" />
            <div class="image-name" :style="imageNameStyle">{{image.name}}</div>
          </div>
        </div>
      </el-popover>
      <div class="panel-option svg" v-popover:addSvgPopover>
        <i class="iconfont icon-jihe_A"></i>
        <div>形状</div>
      </div>
      <el-popover ref="addSvgPopover" placement="bottom" title="选择形状" width="500" trigger="hover">
        <div class="svg-selector" :style="imageSelectorStyle">
          <div
            class="svg-option"
            :style="imageOptionStyle"
            @click="handleClickPanelSvg(SVG_SHAPES.RECT)"
          >
            <i class="iconfont icon-fangxing"></i>
            <div class="svg-name" :style="imageNameStyle">矩形</div>
          </div>
          <div
            class="svg-option"
            :style="imageOptionStyle"
            @click="handleClickPanelSvg(SVG_SHAPES.ELLIPSE)"
          >
            <i class="iconfont icon-yuan"></i>
            <div class="svg-name" :style="imageNameStyle">圆</div>
          </div>
        </div>
      </el-popover>
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
import SvgLayer from "../layer/SvgLayer";
import { SVG_SHAPES } from "../layer/SvgLayer";
import images from "../common/images";

export default {
  name: "EditorHeader",
  data() {
    return {
      images,
      SVG_SHAPES,
      imageSelectorStyle: {
        display: "flex"
      },
      imageOptionStyle: {
        marginRight: "10px",
        cursor: "pointer"
      },
      imageNameStyle: {
        textAlign: "center",
        fontWeight: "bold"
      }
    };
  },
  methods: {
    ...mapMutations("editor", ["addLayer", "setCurLayer"]),
    // 点击面板文字按钮的事件处理
    handleClickPanelText() {
      // 使用相应的构造器创建新的图层实例
      const layerIns = new TextLayer();
      // 把新的图层实例添加进图层列表
      this.addLayer(layerIns);
      // 把新的图层实例设置为当前选中的图层
      this.setCurLayer(layerIns);
    },
    handleClickImageOption(url) {
      // 使用相应的构造器创建新的图层实例
      const layerIns = new ImageLayer(url);
      // 把新的图层实例添加进图层列表
      this.addLayer(layerIns);
      // 把新的图层实例设置为当前选中的图层
      this.setCurLayer(layerIns);
    },
    handleClickPanelSvg(shape) {
      // 使用相应的构造器创建新的图层实例
      const layerIns = new SvgLayer(shape);
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