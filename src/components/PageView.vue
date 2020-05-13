<template>
  <div class="page-view">
    <template v-if="curPage && curPage.layerList">
      <template v-for="(layer, index) in curPage.layerList">
        <text-layer
          v-if="layer.type === 'TEXT'"
          :layer-data="layer"
          :key="index"
          @click-layer="handleClickLayer(layer)"
        ></text-layer>
      </template>
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import TextLayer from "./layers/TextLayer.vue";

export default {
  name: "PageView",
  components: { TextLayer },
  data() {
    return {};
  },
  computed: {
    ...mapState("page", ["curPage"])
  },
  methods: {
    ...mapMutations("editor", ["setCurLayer"]),
    // 点击图层时，把该图层设置为当前选中的图层
    handleClickLayer(layer) {
      this.setCurLayer(layer);
    }
  }
};
</script>

<style lang="less" scoped>
.page-view {
  width: 320px;
  height: 514px;
  margin-top: 60px;
  background-color: #fff;
  position: relative;
}
</style>