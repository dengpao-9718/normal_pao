<template>
  <div class="pagination">
    <el-pagination
      background
      layout="jumper,total,prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 100,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 3,
    },
  },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>
<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}
</style>
