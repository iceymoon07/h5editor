<template>
  <img class="text-layer-static" :src="layerData.url" :style="layerStyle" />
</template>

<script>
export default {
  props: {
    layerData: Object
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
.text-layer-static {
  position: absolute;
}
</style>