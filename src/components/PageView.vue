<template>
  <div class="page-view" @click.capture="setCurLayer(null)">
    <template v-if="curPage && curPage.layerList">
      <template v-for="(layer, index) in curPage.layerList">
        <text-layer
          v-if="layer.type === 'TEXT'"
          :layer-data="layer"
          :key="index"
          @click-layer="handleClickLayer(layer)"
          @drag-layer="handleDragLayer(layer,$event)"
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
    },
    handleDragLayer(layer, e) {
      /*if (e.target !== this.$refs.content) {
        return;
      }*/
      // 记录刚开始点击图层时的初始鼠标位置
      let x0 = e.clientX;
      let y0 = e.clientY;
      // 鼠标移动事件处理
      const handleMove = ({ clientX, clientY, target }) => {
        // 用移动后的鼠标位置相对于初始鼠标位置的变化量，更新图层的 x、y 位置数据
        layer.x = layer.x + clientX - x0;
        layer.y = layer.y + clientY - y0;
        // 更新初始鼠标位置
        x0 = clientX;
        y0 = clientY;
      };
      // 鼠标点击图层时添加鼠标移动事件绑定
      document.addEventListener("mousemove", handleMove);
      // 鼠标松开时移除鼠标移动事件绑定
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", handleMove);
      });
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