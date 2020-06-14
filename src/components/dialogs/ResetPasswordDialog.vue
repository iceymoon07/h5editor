<template>
  <el-dialog
    title="密码重置"
    :center="true"
    width="30%"
    :visible="visible"
    :close-on-click-modal="false"
    @close="closeDialog"
  >
    <el-form
      :model="resetPasswordForm"
      :rules="rules"
      ref="resetPasswordForm"
      status-icon
      label-width="auto"
    >
      <el-form-item label="旧密码" prop="curPassword">
        <el-input v-model="resetPasswordForm.curPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="password">
        <el-input v-model="resetPasswordForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="再次输入新密码" prop="repassword">
        <el-input v-model="resetPasswordForm.repassword" type="password"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="handleClickResetPassword">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { resetPassword } from "../../api/users.js";

export default {
  props: {
    visible: Boolean
  },
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.resetPasswordForm.repassword !== "") {
          this.$refs.resetPasswordForm.validateField("repassword");
        }
        callback();
      }
    };
    const validateRepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.resetPasswordForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      resetPasswordForm: {
        curPassword: "",
        password: "",
        repassword: ""
      },
      rules: {
        curPassword: [
          { required: true, message: "请输入旧密码", trigger: "blur" }
        ],
        password: [{ validator: validatePassword, trigger: "blur" }],
        repassword: [{ validator: validateRepassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    closeDialog() {
      this.$refs["resetPasswordForm"].resetFields();
      this.$emit("close");
    },
    handleClickResetPassword() {
      this.$refs["resetPasswordForm"].validate(async valid => {
        if (valid) {
          const { message } = await resetPassword(this.resetPasswordForm);
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