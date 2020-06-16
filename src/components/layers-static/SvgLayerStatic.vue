<template>
  <svg class="svg-layer-static" :style="layerStyle">
    <rect
      v-if="layerData.shape===SVG_SHAPES.RECT"
      width="100%"
      height="100%"
      :fill="layerData.bgColor"
      :stroke="layerData.bdColor"
      stroke-width="1"
    />
    <ellipse
      v-if="layerData.shape===SVG_SHAPES.ELLIPSE"
      :cx="layerData.w*0.5"
      :cy="layerData.h*0.5"
      :rx="layerData.w*0.5"
      :ry="layerData.h*0.5"
      :fill="layerData.bgColor"
      :stroke="layerData.bdColor"
      stroke-width="1"
    />
  </svg>
</template>

<script>
import { SVG_SHAPES } from "../../layer/SvgLayer";

export default {
  props: {
    layerData: Object
  },
  data() {
    return {
      SVG_SHAPES
    };
  },
  computed: {
    layerStyle() {
      const { x, y, w, h } = this.layerData;
      return {
        transform: `translate(${x}px,${y}px)`,
        width: w + "px",
        height: h + "px"
      };
    }
  }
};
</script>

<style lang="less" scoped>
.svg-layer-static {
  position: absolute;
}
</style>