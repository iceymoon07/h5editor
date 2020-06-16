<template>
  <div class="page-view-static" v-if="curPage && curPage.layerList">
    <template v-for="(layer, index) in curPage.layerList">
      <text-layer-static v-if="layer.type === LAYER_TYPES.TEXT" :layer-data="layer" :key="index"></text-layer-static>
      <image-layer-static v-if="layer.type === LAYER_TYPES.IMAGE" :layer-data="layer" :key="index"></image-layer-static>
      <svg-layer-static v-if="layer.type === LAYER_TYPES.SVG" :layer-data="layer" :key="index"></svg-layer-static>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { LAYER_TYPES } from "../layer/common";
import TextLayerStatic from "./layers-static/TextLayerStatic.vue";
import ImageLayerStatic from "./layers-static/ImageLayerStatic.vue";
import SvgLayerStatic from "./layers-static/SvgLayerStatic.vue";

export default {
  components: { TextLayerStatic, ImageLayerStatic, SvgLayerStatic },
  data() {
    return { LAYER_TYPES };
  },
  computed: {
    ...mapState("page", ["curPage"])
  }
};
</script>

<style lang="less" scoped>
.page-view-static {
  width: 320px;
  height: 514px;
  background-color: #fff;
  position: relative;
}
</style>