<template>
  <div class="svg-layer" :style="layerStyle" @mousedown.prevent.stop="handleMousedown">
    <svg class="content" :style="contentStyle" :width="layerData.w" :height="layerData.h">
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
    <widget
      :layer-data="layerData"
      v-if="isSelected"
      @drag-tl="$emit('drag-tl',$event)"
      @drag-tr="$emit('drag-tr',$event)"
      @drag-bl="$emit('drag-bl',$event)"
      @drag-br="$emit('drag-br',$event)"
    ></widget>
  </div>
</template>

<script>
import Widget from "../Widget.vue";
import { mapState } from "vuex";
import { SVG_SHAPES } from "../../layer/SvgLayer";

export default {
  components: { Widget },
  props: {
    layerData: Object
  },
  data() {
    return {
      SVG_SHAPES
    };
  },
  computed: {
    ...mapState("editor", ["curLayer"]),
    // 图层的样式
    layerStyle() {
      const { x, y, w, h } = this.layerData;
      return {
        transform: `translate(${x - 1}px,${y - 1}px)`,
        width: w + "px",
        height: h + "px",
        border: this.isSelected ? "1px dashed" : "1px dashed transparent"
      };
    },
    contentStyle() {
      return {
        cursor: this.isSelected ? "move" : "auto"
      };
    },
    // 判断图层是不是当前选中的图层，是的话就显示边框控件 Widget
    isSelected() {
      return this.layerData === this.curLayer;
    }
  },
  methods: {
    handleMousedown(e) {
      this.$emit("click-layer");
      this.$emit("drag-layer", e);
    }
  }
};
</script>

<style lang="less" scoped>
.svg-layer {
  position: absolute;
  box-sizing: content-box;
  .content {
    position: absolute;
  }
}
</style>