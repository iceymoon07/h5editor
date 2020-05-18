<template>
  <div class="page-view-static" v-if="curPage && curPage.layerList">
    <template v-for="(layer, index) in curPage.layerList">
      <text-layer-static v-if="layer.type === 'TEXT'" :layer-data="layer" :key="index"></text-layer-static>
      <image-layer-static v-if="layer.type === 'IMAGE'" :layer-data="layer" :key="index"></image-layer-static>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TextLayerStatic from "./layers-static/TextLayerStatic.vue";
import ImageLayerStatic from "./layers-static/ImageLayerStatic.vue";

export default {
  components: { TextLayerStatic, ImageLayerStatic },
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