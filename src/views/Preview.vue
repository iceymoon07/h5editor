<template>
  <div class="preview">
    <page-view-static></page-view-static>
    <pagination></pagination>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import html2canvas from "html2canvas";
import PageViewStatic from "../components/PageViewStatic.vue";
import Pagination from "../components/Pagination.vue";

export default {
  components: { PageViewStatic, Pagination },
  computed: {
    ...mapState("page", ["pageList"])
  },
  methods: {
    ...mapMutations("page", ["setCurPage"])
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
}
</style>