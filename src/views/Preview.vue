<template>
  <div class="preview">
    <button class="back-to-editor-button" @click="$router.push(`/editor/${$route.params.id}`)">
      <i class="iconfont icon-zuo"></i>
      <span>返回编辑</span>
    </button>
    <button class="output-img-button" @click="handleOutputPage">
      <i class="iconfont icon-daochu"></i>
      <span>导出</span>
    </button>
    <button class="save-work-button" @click="handleSaveWork">
      <i class="iconfont icon-baocun"></i>
      <span>保存</span>
    </button>
    <div class="work-title">{{title}}</div>
    <page-view-static></page-view-static>
    <pagination></pagination>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import { mapState, mapMutations } from "vuex";
import PageViewStatic from "../components/PageViewStatic.vue";
import Pagination from "../components/Pagination.vue";
import { createWork, updateWork } from "../api/works.js";

export default {
  components: { PageViewStatic, Pagination },
  data() {
    return {
      firstPageThumb: ""
    };
  },
  computed: {
    ...mapState("page", ["title", "pageList"])
  },
  methods: {
    ...mapMutations("page", ["setPageList", "setCurPage"]),
    handleOutputPage() {
      const pageElement = document.querySelector(".page-view-static");
      html2canvas(pageElement).then(canvas => {
        const url = canvas.toDataURL();
        const a = document.createElement("a");
        a.href = url;
        a.download = "导出";
        a.click();
      });
    },
    async handleSaveWork() {
      const id = this.$route.params.id;
      if (id === "newwork") {
        const res = await createWork({
          title: this.title,
          pageList: this.pageList,
          firstPageThumb: this.firstPageThumb
        });
        this.$message.success(res.message);
      } else {
        const res = await updateWork(id, {
          title: this.title,
          pageList: this.pageList,
          firstPageThumb: this.firstPageThumb
        });
        this.$message.success(res.message);
      }
      this.$router.push("/");
    }
  },
  created() {
    const [firstPage] = this.pageList;
    this.setCurPage(firstPage);
  },
  async mounted() {
    const pageElement = document.querySelector(".page-view-static");
    const canvas = await html2canvas(pageElement);
    const url = canvas.toDataURL();
    this.firstPageThumb = url;
  }
};
</script>

<style lang="less" scoped>
.preview {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;

  > button {
    position: absolute;
    padding: 10px;
    background: none;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    * {
      font-size: 20px;
    }

    &:hover {
      color: #fff;
      background-color: #187cea;
    }

    &.back-to-editor-button {
      top: 20px;
      left: 20px;
    }

    &.output-img-button {
      top: 20px;
      right: 100px;
    }

    &.save-work-button {
      top: 20px;
      right: 20px;
    }
  }

  .work-title {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  .operation {
    > span {
      margin-right: 10px;
      cursor: pointer;
    }

    font-size: 20px;
  }
}
</style>