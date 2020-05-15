<template>
  <div class="page-view" @click.capture="setCurLayer(null)">
    <template v-if="curPage && curPage.layerList">
      <template v-for="(layer, index) in curPage.layerList">
        <text-layer
          v-if="layer.type === 'TEXT'"
          :layer-data="layer"
          :key="index"
          @click-layer="handleClickLayer(layer)"
          @drag-layer="handleDragLayer(layer,$event)"
          @drag-tl="handleDragTL(layer,$event)"
          @drag-tr="handleDragTR(layer,$event)"
          @drag-bl="handleDragBL(layer,$event)"
          @drag-br="handleDragBR(layer,$event)"
        ></text-layer>
        <image-layer
          v-if="layer.type === 'IMAGE'"
          :layer-data="layer"
          :key="index"
          @click-layer="handleClickLayer(layer)"
          @drag-layer="handleDragLayer(layer,$event)"
          @drag-tl="handleDragTL(layer,$event)"
          @drag-tr="handleDragTR(layer,$event)"
          @drag-bl="handleDragBL(layer,$event)"
          @drag-br="handleDragBR(layer,$event)"
        ></image-layer>
      </template>
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import TextLayer from "./layers/TextLayer.vue";
import ImageLayer from "./layers/ImageLayer.vue";
import {
  handleDragLayer,
  handleDragTL,
  handleDragTR,
  handleDragBL,
  handleDragBR
} from "../utils/dragHandlers";

export default {
  name: "PageView",
  components: { TextLayer, ImageLayer },
  data() {
    return {};
  },
  computed: {
    ...mapState("page", ["curPage"])
  },
  methods: {
    ...mapMutations("editor", ["setCurLayer"]),
    // 点击图层时，把该图层设置为当前选中的图层
    handleClickLayer(layer) {
      this.setCurLayer(layer);
    },
    // 拖拽图层事件处理
    handleDragLayer,
    // 拖拽控件左上角方块事件处理
    handleDragTL,
    // 拖拽控件右上角方块事件处理
    handleDragTR,
    // 拖拽控件左下角方块事件处理
    handleDragBL,
    // 拖拽控件右下角方块事件处理
    handleDragBR
  }
};
</script>

<style lang="less" scoped>
.page-view {
  width: 320px;
  height: 514px;
  margin-top: 60px;
  background-color: #fff;
  position: relative;
}
</style>