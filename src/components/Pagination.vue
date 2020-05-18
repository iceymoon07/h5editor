<template>
  <div class="pagination">
    <button class="prev" :disabled="curPageIndex===0" @click="handleClickPrev">
      <i class="iconfont icon-zuo"></i>
    </button>
    <span>{{`${curPageIndex+1}/${allPageCount}`}}</span>
    <button class="next" :disabled="curPageIndex===allPageCount-1" @click="handleClickNext">
      <i class="iconfont icon-you"></i>
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("page", ["curPage", "pageList"]),
    curPageIndex() {
      return this.pageList.indexOf(this.curPage);
    },
    allPageCount() {
      return this.pageList.length;
    }
  },
  methods: {
    ...mapMutations("page", ["setCurPage"]),
    handleClickPrev() {
      const previndex = this.curPageIndex - 1;
      const prevPage = this.pageList[previndex];
      this.setCurPage(prevPage);
    },
    handleClickNext() {
      const nextindex = this.curPageIndex + 1;
      const nextPage = this.pageList[nextindex];
      this.setCurPage(nextPage);
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  margin-top: 40px;

  span {
      margin: 0 10px;
  }

  button {
    background-color: #187cea;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    i {
      color: #fff;
    }
  }
}
</style>