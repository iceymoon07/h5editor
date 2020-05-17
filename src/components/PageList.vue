<template>
  <div class="page-list">
    <div
      class="page-item"
      :class="{ active:isActive(page) }"
      v-for="(page, index) in pageList"
      :key="index"
      @click="handleClickPage(page)"
    >
      <span>第{{index+1}}页</span>
      <i
        class="iconfont icon-shanchu"
        @click.stop="handleDeletePage(page,index)"
        v-if="pageList.length !== 1"
      ></i>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("page", ["pageList", "curPage"])
  },
  methods: {
    ...mapMutations("editor", ["setLayerList"]),
    ...mapMutations("page", ["setCurPage", "deletePage"]),
    // 判断页面是否是当前选中的页面
    isActive(page) {
      return this.curPage === page;
    },
    handleClickPage(page) {
      this.setCurPage(page);
      this.setLayerList(page.layerList);
    },
    // 点击删除页面事件处理
    handleDeletePage(page, index) {
      const jumpPage =
        index === 0 ? this.pageList[1] : this.pageList[index - 1];
      this.setCurPage(jumpPage);
      this.setLayerList(jumpPage.layerList);
      this.deletePage(page);
    }
  }
};
</script>

<style lang="less" scoped>
.page-list {
  position: absolute;
  left: 0;
  top: 60px;
  background-color: rgb(11, 32, 46);
  width: 200px;
  height: calc(100vh - 100px);
  overflow-y: scroll;

  .page-item {
    position: relative;
    width: 100px;
    height: 160px;
    background-color: #fff;
    margin: 20px;
    cursor: pointer;

    &.active {
      opacity: 0.5;
    }

    i {
      position: absolute;
      right: -20px;
      color: #fff;
    }
  }
}
</style>