<template>
  <div
    class="text-layer"
    :style="layerStyle"
    @dblclick="inputDisabled=false"
    @mousedown.stop="handleMousedown"
  >
    <textarea
      class="content"
      :style="contentStyle"
      type="text"
      v-model="layerData.text"
      :disabled="inputDisabled"
      @blur="inputDisabled=true"
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
    return { inputDisabled: true };
  },
  computed: {
    ...mapState("editor", ["curLayer"]),
    // 文本图层的样式
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
      const { color, fontSize, bold, italic, underline, w, h } = this.layerData;
      return {
        width: w + "px",
        height: h + "px",
        color: color,
        fontSize: fontSize + "px",
        fontWeight: bold ? "bold" : "normal",
        fontStyle: italic ? "italic" : "normal",
        textDecoration: underline ? "underline" : "none",
        cursor: this.isSelected && this.inputDisabled ? "move" : "auto"
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
      if (this.inputDisabled) {
        this.$emit("drag-layer", e);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.text-layer {
  position: absolute;
  box-sizing: content-box;

  .content {
    position: absolute;
    border: none;
    background: none;
    resize: none;
    word-break: break-all;
    font-family: inherit;

    &:focus {
      outline: none;
    }

    &:disabled {
      background: none;
    }
  }
}
</style>