<template>
  <el-dialog
    title="注册"
    :center="true"
    width="30%"
    :visible="visible"
    :close-on-click-modal="false"
    @close="closeDialog"
  >
    <el-form :model="registerForm" :rules="rules" ref="registerForm" status-icon label-width="auto">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="registerForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="再次输入密码" prop="repassword">
        <el-input v-model="registerForm.repassword" type="password"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="handleClickRegister">注册</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { register, isUserNameExisted } from "../../api/users.js";

export default {
  props: {
    visible: Boolean
  },
  data() {
    const name = async (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (await isUserNameExisted(value)) {
        callback(new Error("该用户名已被注册"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.repassword !== "") {
          this.$refs.registerForm.validateField("repassword");
        }
        callback();
      }
    };
    const validateRepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        name: "",
        password: "",
        repassword: ""
      },
      rules: {
        name: [{ validator: name, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        repassword: [{ validator: validateRepassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    closeDialog() {
      this.$refs["registerForm"].resetFields();
      this.$emit("close");
    },
    handleClickRegister() {
      this.$refs["registerForm"].validate(async valid => {
        if (valid) {
          const { message } = await register(this.registerForm);
          this.$message.success(message);
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