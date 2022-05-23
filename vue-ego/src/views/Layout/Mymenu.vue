<template>
  <div class="Mymenu">
    <el-menu
      default-active="$router.path"
      class="el-menu-vertical-demo"
      background-color="#183555"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
      collapse-transition
    >
      <el-menu-item>
        <span slot="title">快快乐乐每一天</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <!-- <span slot="title">首页</span> -->
        <span slot="title">{{ $t("menu.home") }}</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-document"></i>
        <!-- <span slot="title">商品管理</span> -->
        <span slot="title">{{ $t("menu.home") }}</span>
      </el-menu-item>
      <el-menu-item index="/params">
        <i class="el-icon-setting"></i>
        <!-- <span slot="title">规格参数</span> -->
        <span slot="title">{{ $t("menu.parmas") }}</span>
      </el-menu-item>
      <el-menu-item index="/advert">
        <i class="el-icon-setting"></i>
        <span slot="title">广告分类</span>
      </el-menu-item>
      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/orderList">
            <i class="el-icon-location"></i>
            <span>订单列表</span></el-menu-item
          >
          <el-menu-item index="/order/orderBack">
            <i class="el-icon-location"></i>
            <span>退货管理</span></el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-menu {
  width: 100%;
  border-right: 0;
  height: 100%;
  .is-active {
    background: #054476 !important;
    color: #fff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
