<template>
  <div class="editor">
    <editor-header></editor-header>
    <page-view></page-view>
    <edit-box></edit-box>
  </div>
</template>

<script>
import EditorHeader from "../components/EditorHeader.vue";
import PageView from "../components/PageView.vue";
import EditBox from "../components/EditBox.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Editor",
  components: {
    EditorHeader,
    PageView,
    EditBox
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
    ...mapMutations("editor", ["setLayerList"]),
    ...mapMutations("page", ["setCurPage"])
  }
};
</script>

<style lang="less" scoped>
.editor {
  position: relative;
  height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>