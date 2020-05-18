<template>
  <div class="editor">
    <editor-header></editor-header>
    <div class="page-view-container" @mousedown="setCurLayer(null)">
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

export default {
  name: "Editor",
  components: {
    EditorHeader,
    PageView,
    EditBox,
    PageList
  },
  computed: {
    ...mapState("page", ["pageList"])
  },
  mounted() {
    const [firstPage] = this.pageList;
    this.setCurPage(firstPage);
    this.setLayerList(firstPage.layerList);
  },
  methods: {
    ...mapMutations("editor", ["setLayerList", "setCurLayer"]),
    ...mapMutations("page", ["setCurPage", "addPage"]),
    handleAddPage() {
      const newPage = { layerList: [], previewUrl: "" };
      this.addPage(newPage);
      this.setCurPage(newPage);
      this.setLayerList(newPage.layerList);
    }
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