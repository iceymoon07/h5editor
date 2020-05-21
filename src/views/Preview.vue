<template>
  <div class="preview">
    <page-view-static></page-view-static>
    <pagination></pagination>
    <span class="output" @click="handleOutputPage">
      <span>导出</span>
      <i class="iconfont icon-daochu"></i>
    </span>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import { mapState, mapMutations } from "vuex";
import PageViewStatic from "../components/PageViewStatic.vue";
import Pagination from "../components/Pagination.vue";

export default {
  components: { PageViewStatic, Pagination },
  computed: {
    ...mapState("page", ["pageList"])
  },
  methods: {
    ...mapMutations("page", ["setCurPage"]),
    handleOutputPage() {
      const pageElement = document.querySelector(".page-view-static");
      html2canvas(pageElement).then(canvas => {
        const url = canvas.toDataURL();
        const a = document.createElement("a");
        a.href = url;
        a.download = "导出";
        a.click();
      });
    }
  },
  mounted() {
    const [firstPage] = this.pageList;
    this.setCurPage(firstPage);
  }
};
</script>

<style lang="less" scoped>
.preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;

  .output {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>