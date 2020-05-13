<template>
  <div class="editor">
    <editor-header></editor-header>
  </div>
</template>

<script>
import EditorHeader from "../components/EditorHeader.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Editor",
  components: {
    EditorHeader
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
}
</style>