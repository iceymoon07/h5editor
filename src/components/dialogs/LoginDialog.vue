<template>
  <el-dialog
    title="登录"
    :center="true"
    width="30%"
    :close-on-click-modal="false"
    :visible="visible"
    @close="closeDialog"
  >
    <el-form :model="loginForm" :rules="rules" ref="loginForm" status-icon label-width="auto">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="handleClickLogin">登录</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapMutations } from "vuex";
import { login, getLoginState } from "../../api/users.js";

export default {
  props: {
    visible: Boolean
  },
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapMutations("user", ["setIsLogin", "setUserName"]),
    closeDialog() {
      this.$refs["loginForm"].resetFields();
      this.$emit("close");
    },
    handleClickLogin() {
      this.$refs["loginForm"].validate(async valid => {
        if (valid) {
          const res = await login(this.loginForm);
          const { isLogin, userName } = await getLoginState();
          this.$message.success(res.message);
          this.setIsLogin(isLogin);
          this.setUserName(userName);
          this.closeDialog();
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
</style>