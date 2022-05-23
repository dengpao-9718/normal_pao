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
        <el-dropdown>
          <span class="el-dropdown-link">
            多语言<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="user">
          欢迎: xxx
          <span>退出的登录</span>
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
export default {
  props: ["isCollapse"],
  methods: {
    changeMenu() {
      //点击切换按钮的时候，修改父组件的数据 isCollapse
      this.$emit("changeCollapse");
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
