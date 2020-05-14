<template>
  <div class="text-layer">
    <div
      class="content"
      ref="content"
      :style="layerStyle"
      contenteditable="true"
      @click.capture="$emit('click-layer')"
    >{{layerData.text}}</div>
    <widget :layer-data="layerData" v-if="isSelected"></widget>
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
      const { color, fontSize, x, y, w, h } = this.layerData;
      return {
        color: color,
        fontSize: fontSize + "px",
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
  methods: {
    handleDragLayer(e) {
      if (e.target !== this.$refs.content) {
        return;
      }
      let x0 = e.clientX;
      let y0 = e.clientY;
      const handleMove = ({ clientX, clientY, target }) => {
        this.layerData.x = this.layerData.x + clientX - x0;
        this.layerData.y = this.layerData.y + clientY - y0;
        x0 = clientX;
        y0 = clientY;
      };
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", handleMove);
      });
    }
  },
  mounted() {
    document.addEventListener("mousedown", this.handleDragLayer);
  }
};
</script>

<style lang="less" scoped>
.text-layer {
  position: absolute;
  .content {
    position: absolute;
    z-index: 100;
  }
}
</style>