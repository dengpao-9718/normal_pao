<template>
  <div class="right_cont">
    <div class="header">
      <i
        v-if="!isCollapse"
        @click="changeMenu"
        class="iconfont icon-right-indent"
      ></i>
      <i v-else @click="changeMenu" class="iconfont icon-left-indent"></i>
      <div class="header-right">
        <el-dropdown @command="clickLang">
          <span class="el-dropdown-link">
            多语言<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="user">
          欢迎: {{ userinfo.user }}
          <i class="iconfont icon-tuichu" @click="loginout"></i>
        </div>
      </div>
    </div>
    <!-- 内容区域   路由出口 -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["isCollapse"],
  computed: {
    ...mapState("loginModule", ["userinfo"]),
  },
  methods: {
    ...mapMutations("coginModule", ["clearUser"]),
    loginout() {
      //退出登录
      this.clearUser();
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
    changeMenu() {
      //点击切换按钮的时候，修改父组件的数据 isCollapse
      this.$emit("changeCollapse");
    },
    clickLang(command) {
      console.log(command);
      this.$i18n.locale = command;
    },
  },
};
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
