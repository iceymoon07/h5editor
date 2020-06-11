<template>
  <div class="home" v-if="allWorksData">
    <header>H5-EDITOR HOME</header>
    <button class="create-new-work-button" @click="$router.push('/editor/newwork')">
      <i class="iconfont icon-iconfontzhizuobiaozhun023149"></i>
      <span>创建新作品</span>
    </button>
    <div class="works-list">
      <div class="work-item" v-for="(workData, index) in allWorksData" :key="index">
        <img
          :src="workData.firstPageThumb"
          width="160"
          height="257"
          @click="$router.push(`/work/${workData._id}`)"
        />
        <div class="work-title" @click="$router.push(`/work/${workData._id}`)">{{workData.title}}</div>
        <div class="work-operation">
          <i class="iconfont icon-xiugai" @click="$router.push(`editor/${workData._id}`)"></i>
          <i class="iconfont icon-shanchu" @click="handleDelete(workData._id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getAllWorks, deleteWork } from "../api/works.js";

export default {
  data() {
    return {
      allWorksData: null
    };
  },
  methods: {
    ...mapMutations("page", ["setCurPage", "setTitle", "setPageList"]),
    async handleDelete(id) {
      const res = await deleteWork(id);
      this.$message.success(res.message);
      this.allWorksData = await getAllWorks();
    }
  },
  async mounted() {
    this.setPageList([
      {
        layerList: []
      }
    ]);
    this.setCurPage(null);
    this.setTitle("我的h5作品");
    this.allWorksData = await getAllWorks();
  }
};
</script>

<style lang="less">
.home {
  position: relative;
  height: 100vh;
  background-color: #eee;

  header {
    padding-top: 40px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }

  .create-new-work-button {
    position: absolute;
    top: 20px;
    right: 20px;
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

  .works-list {
    display: flex;
    flex-wrap: wrap;
    padding: 40px 200px;

    .work-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 40px;
      margin-bottom: 40px;

      * {
        cursor: pointer;
        margin-bottom: 10px;
      }

      .work-title {
        max-width: 160px;
        font-weight: bold;
        word-wrap: break-word;
        word-break: break-all;

        &:hover {
          text-decoration: underline;
        }
      }

      i {
        font-size: 20px;
        margin-right: 5px;

        &.icon-shanchu {
          color: red;
        }
      }
    }
  }
}
</style>