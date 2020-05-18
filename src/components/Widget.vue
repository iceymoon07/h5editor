<template>
  <div class="widget">
    <div class="corner tl" :style="cornerStyle.tl" @mousedown.stop="$emit('drag-tl',$event)"></div>
    <div class="corner tr" :style="cornerStyle.tr" @mousedown.stop="$emit('drag-tr',$event)"></div>
    <div class="corner bl" :style="cornerStyle.bl" @mousedown.stop="$emit('drag-bl',$event)"></div>
    <div class="corner br" :style="cornerStyle.br" @mousedown.stop="$emit('drag-br',$event)"></div>
  </div>
</template>

<script>
export default {
  name: "Widget",
  props: {
    layerData: Object
  },
  computed: {
    // 控件四角方块样式
    cornerStyle() {
      const { x, y, w, h } = this.layerData;
      return {
        tl: {
          transform: "translate(-5px,-5px)",
          cursor: "nw-resize"
        },
        tr: {
          transform: `translate(${w - 3}px,-5px)`,
          cursor: "ne-resize"
        },
        bl: {
          transform: `translate(-5px,${h - 3}px)`,
          cursor: "sw-resize"
        },
        br: {
          transform: `translate(${w - 3}px,${h - 3}px)`,
          cursor: "se-resize"
        }
      };
    }
  }
};
</script>

<style lang="less" scoped>
.widget {
  position: absolute;
  .corner {
    box-sizing: content-box;
    z-index: 20;
    position: absolute;
    width: 6px;
    height: 6px;
    border: 1px solid #000;
    background-color: #fff;
  }
}
</style>
