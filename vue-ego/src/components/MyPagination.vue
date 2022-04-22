<template>
  <div class="pagination">
    <el-pagination
      background
      layout="jumper,total,prev, pager, next"
      :total="total"
      :page-size="pageSize"
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
