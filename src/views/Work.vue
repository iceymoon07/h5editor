<template>
  <div class="work">
    <button class="back-to-home-button" @click="$router.push('/')">
      <i class="iconfont icon-zuo"></i>
      <span>返回首页</span>
    </button>
    <div class="work-title">{{title}}</div>
    <page-view-static></page-view-static>
    <pagination></pagination>
  </div>
</template>

<script>
import PageViewStatic from "../components/PageViewStatic.vue";
import Pagination from "../components/Pagination.vue";
import { mapState, mapMutations } from "vuex";
import { getWorkById } from "../api/works.js";

export default {
  components: { PageViewStatic, Pagination },
  computed: {
    ...mapState("page", ["title", "pageList"])
  },
  methods: {
    ...mapMutations("page", ["setTitle", "setPageList", "setCurPage"])
  },
  async mounted() {
    const id = this.$route.params.id;
    const workData = await getWorkById(id);
    this.setPageList(workData.pageList);
    this.setTitle(workData.title);
    const [firstPage] = this.pageList;
    this.setCurPage(firstPage);
  }
};
</script>

<style lang="less" scoped>
.work {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;

  .back-to-home-button {
    position: absolute;
    top: 20px;
    left: 20px;
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
  }

  .work-title {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>