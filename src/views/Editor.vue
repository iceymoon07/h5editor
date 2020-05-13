<template>
  <div class="editor">
    <editor-header></editor-header>
    <page-view></page-view>
  </div>
</template>

<script>
import EditorHeader from "../components/EditorHeader.vue";
import PageView from "../components/PageView.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Editor",
  components: {
    EditorHeader,
    PageView
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
  height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>