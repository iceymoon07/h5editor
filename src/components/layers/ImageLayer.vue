<template>
  <div class="image-layer" :style="layerStyle" @mousedown.prevent="handleMousedown">
    <img class="content" :src="layerData.url" :style="contentStyle" />
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

export default {
  name: "TextLayer",
  components: { Widget },
  props: {
    layerData: Object
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("editor", ["curLayer"]),
    // 图层的样式
    layerStyle() {
      const { x, y, w, h } = this.layerData;
      return {
        transform: `translate(${x}px,${y}px)`,
        width: w + "px",
        height: h + "px",
        border: this.isSelected ? "1px dashed" : "none"
      };
    },
    contentStyle() {
      const { w, h } = this.layerData;
      return {
        width: w + "px",
        height: h + "px",
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
.image-layer {
  position: absolute;
  .content {
    position: absolute;
  }
}
</style>