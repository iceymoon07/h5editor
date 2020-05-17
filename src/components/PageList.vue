<template>
  <div class="page-list">
    <template v-for="(page, index) in pageList">
      <div
        class="page-item"
        :class="{ active:isActive(page) }"
        :key="index"
        @click="handleClickPage(page)"
      >第{{index+1}}页</div>
      <i
        class="iconfont icon-shanchu"
        :key="'del'+index"
        @click.stop="handleDeletePage(page,index)"
        v-if="pageList.length !== 1"
      ></i>
    </template>
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
    ...mapMutations("editor", ["setLayerList", "setCurLayer"]),
    ...mapMutations("page", ["setCurPage", "deletePage"]),
    // 判断页面是否是当前选中的页面
    isActive(page) {
      return this.curPage === page;
    },
    handleClickPage(page) {
      this.setCurPage(page);
      this.setLayerList(page.layerList);
      this.setCurLayer(null);
    },
    // 点击删除页面事件处理
    handleDeletePage(page, index) {
      const jumpPage =
        index === 0 ? this.pageList[1] : this.pageList[index - 1];
      this.setCurPage(jumpPage);
      this.setLayerList(jumpPage.layerList);
      this.deletePage(page);
      this.setCurLayer(null);
    }
  }
};
</script>

<style lang="less" scoped>
.page-list {
  position: absolute;
  left: 0;
  top: 60px;
  width: 200px;
  height: calc(100vh - 100px);
  background-color: #fff;
  border-right: 1px solid #c2c2c2;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 100px;
  }

  .page-item {
    display: inline-block;
    width: 100px;
    height: 160px;
    background-color: #333;
    border: 3px solid #fff;
    margin: 20px;
    cursor: pointer;

    &.active {
      border-color: #187cea;
    }
  }

  i {
    cursor: pointer;
  }
}
</style>