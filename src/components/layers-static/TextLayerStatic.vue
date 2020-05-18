<template>
  <div class="text-layer-static" :style="layerStyle">{{layerData.text}}</div>
</template>

<script>
export default {
  props: {
    layerData: Object
  },
  computed: {
    layerStyle() {
      const { x, y, w, h, color, fontSize } = this.layerData;
      return {
        transform: `translate(${x}px,${y}px)`,
        width: w + "px",
        height: h + "px",
        color: color,
        fontSize: fontSize + "px"
      };
    }
  }
};
</script>

<style lang="less" scoped>
.text-layer-static {
  position: absolute;
}
</style>