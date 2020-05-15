<template>
  <div class="image-layer">
    <img
      class="content"
      :src="layerData.url"
      :style="layerStyle"
      @click.capture="$emit('click-layer')"
      @mousedown.prevent="$emit('drag-layer',$event)"
    />
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
    // 文本图层的样式
    layerStyle() {
      const { x, y, w, h } = this.layerData;
      return {
        transform: `translate(${x}px,${y}px)`,
        width: w + "px",
        height: h + "px"
      };
    },
    // 判断图层是不是当前选中的图层，是的话就显示边框控件 Widget
    isSelected() {
      return this.layerData === this.curLayer;
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.image-layer {
  position: absolute;
  .content {
    position: absolute;
    z-index: 100;
  }
}
</style>