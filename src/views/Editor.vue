<template>
  <div class="editor">
    <editor-header></editor-header>
    <div class="page-view-container" @mousedown="setCurLayer(null)">
      <div class="work-title" v-if="!isWorkTitleInputShow">
        <span>{{title}}</span>
        <i class="iconfont icon-xiugai" @click="isWorkTitleInputShow=true"></i>
      </div>
      <input
        type="text"
        class="work-title-input"
        v-if="isWorkTitleInputShow"
        :value="title"
        @blur="handleWorkTitleInput($event)"
      />
      <page-view></page-view>
    </div>
    <edit-box></edit-box>
    <page-list></page-list>
    <div class="add-page" @click="handleAddPage">+ 添加页面</div>
  </div>
</template>

<script>
import EditorHeader from "../components/EditorHeader.vue";
import PageView from "../components/PageView.vue";
import EditBox from "../components/EditBox.vue";
import PageList from "../components/PageList.vue";
import { mapMutations, mapState } from "vuex";
import { getWorkById } from "../api/works.js";

export default {
  name: "Editor",
  components: {
    EditorHeader,
    PageView,
    EditBox,
    PageList
  },
  data() {
    return {
      isWorkTitleInputShow: false
    };
  },
  computed: {
    ...mapState("page", ["title", "pageList"])
  },
  methods: {
    ...mapMutations("editor", ["setLayerList", "setCurLayer"]),
    ...mapMutations("page", [
      "setTitle",
      "setPageList",
      "setCurPage",
      "addPage"
    ]),
    handleAddPage() {
      const newPage = { layerList: [] };
      this.addPage(newPage);
      this.setCurPage(newPage);
      this.setLayerList(newPage.layerList);
    },
    handleWorkTitleInput(e) {
      this.setTitle(e.target.value);
      this.isWorkTitleInputShow = false;
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    if (id !== "newwork") {
      const workData = await getWorkById(id);
      this.setPageList(workData.pageList);
      this.setTitle(workData.title);
    }
    const [firstPage] = this.pageList;
    this.setCurPage(firstPage);
    this.setLayerList(firstPage.layerList);
  }
};
</script>

<style lang="less" scoped>
.editor {
  position: relative;
  height: 100vh;
  background-color: #eee;

  .page-view-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 60px);

    .work-title {
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: bold;

      * {
        margin-right: 10px;
      }

      i {
        cursor: pointer;
      }
    }

    .work-title-input {
      margin-bottom: 20px;
      font-size: 20px;
    }
  }

  .add-page {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200px;
    height: 40px;
    background-color: #187cea;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
}
</style>