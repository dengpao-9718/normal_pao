<template>
  <div>
    <div class="login_box">
      <h3 class="title">登录界面</h3>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-loginForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import jwt from "jwt-decode";
import { mapMutations } from "vuex";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var password = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: password, trigger: "blur" }],
      },
    };
  },
  methods: {
    ...mapMutations("loginModule", ["setUser"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("校验通过", this.loginForm);
          let { username, password } = this.loginForm;
          //请求登录接口---------
          this.$api.getLogin({ username, password }).then((res) => {
            console.log("login-data", res.data);
            if (res.data.status == 200) {
              console.log(jwt(res.data.data));
              //登陆成功后 : 1.存储登录信息  2. 跳转网页 3. 顶部区域显示用户信息 4 . 持久化
              let obj = {
                user: jwt(res.data.data).username,
                token: res.data.data,
              };
              this.setUser(obj);
              localStorage.setItem("user", JSON.stringify(obj));
              //跳转
              this.$router.push("/");
            } else {
              //账号或者密码错误
              // this.info='账号或者密码错误'
              this.$message.error("账号或者密码错误");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
:root {
  --paopao: #fff;
}
.login_box {
  width: 400px;
  height: 300px;
  padding: 20px;
  margin: 300px auto;
  border-radius: 20px;
  border: 1px solid #eee;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  color: #222;
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
}
</style>
