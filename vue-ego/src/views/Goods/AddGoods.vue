<template>
  <div class="add-goods">
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/goods' }"
          >商品管理</el-breadcrumb-item
        >
        <el-breadcrumb-item>添加商品</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h3>商品添加</h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.add-goods {
  margin: 10px;
}
.title {
  padding: 10px;
  background: #fff;
  border: 1px solid #eee;
  margin-block: 20px;
}
</style>
