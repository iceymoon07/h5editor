<template>
  <div class="home" v-if="allWorksData">
    <header>H5-EDITOR HOME</header>
    <template v-if="!isLogin">
      <button class="login-button" @click="loginDialogVisible=true">
        <span>登录</span>
      </button>
      <login-dialog :visible="loginDialogVisible" @close="loginDialogVisible=false"></login-dialog>
      <button class="register-button" @click="registerDialogVisible=true">
        <span>注册</span>
      </button>
      <register-dialog :visible="registerDialogVisible" @close="registerDialogVisible=false"></register-dialog>
    </template>
    <template v-if="isLogin">
      <span class="user-name">{{userName}}</span>
      <button class="reset-password-button" @click="resetPasswordDialogVisible=true">
        <span>修改密码</span>
      </button>
      <reset-password-dialog
        :visible="resetPasswordDialogVisible"
        @close="resetPasswordDialogVisible=false"
      ></reset-password-dialog>
      <button class="logout-button" @click="handleClickLogout">
        <span>退出登录</span>
      </button>
    </template>
    <button class="create-new-work-button" @click="handleCreateNewWork">
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
          <i class="iconfont icon-xiugai" @click="handleEditWork(workData._id)"></i>
          <i class="iconfont icon-shanchu" @click="handleDelete(workData._id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginDialog from "../components/dialogs/LoginDialog.vue";
import RegisterDialog from "../components/dialogs/RegisterDialog.vue";
import ResetPasswordDialog from "../components/dialogs/ResetPasswordDialog.vue";
import { mapState, mapMutations } from "vuex";
import { getAllWorks, deleteWork } from "../api/works.js";
import { logout, getLoginState } from "../api/users.js";

export default {
  components: { LoginDialog, RegisterDialog, ResetPasswordDialog },
  data() {
    return {
      allWorksData: null,
      loginDialogVisible: false,
      registerDialogVisible: false,
      resetPasswordDialogVisible: false
    };
  },
  computed: {
    ...mapState("user", ["isLogin", "userName"])
  },
  methods: {
    ...mapMutations("page", ["setCurPage", "setTitle", "setPageList"]),
    ...mapMutations("user", ["setIsLogin", "setUserName"]),
    async handleDelete(id) {
      if (this.isLogin) {
        const res = await deleteWork(id);
        this.$message.success(res.message);
        this.allWorksData = await getAllWorks();
      } else {
        this.$message.warning("请先登录");
      }
    },
    async handleClickLogout() {
      const { message } = await logout();
      const { isLogin, userName } = await getLoginState();
      this.$message.warning(message);
      this.setIsLogin(isLogin);
      this.setUserName(userName);
    },
    handleCreateNewWork() {
      if (this.isLogin) {
        this.$router.push("/editor/newwork");
      } else {
        this.$message.warning("请先登录");
      }
    },
    handleEditWork(id) {
      if (this.isLogin) {
        this.$router.push(`editor/${id}`);
      } else {
        this.$message.warning("请先登录");
      }
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

  > .user-name {
    position: absolute;
    padding: 10px;
    font-size: 20px;
    top: 20px;
    left: 20px;
  }

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

    &.login-button {
      top: 20px;
      left: 20px;
    }

    &.register-button {
      top: 20px;
      left: 100px;
    }

    &.create-new-work-button {
      top: 20px;
      right: 20px;
    }

    &.reset-password-button {
      top: 20px;
      left: 100px;
    }

    &.logout-button {
      top: 20px;
      left: 200px;
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