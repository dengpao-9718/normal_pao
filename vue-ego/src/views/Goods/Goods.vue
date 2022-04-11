<template>
  <div>
    <!-- 搜索区域 -->
    <div class="header">
      <el-input
        class="good_search"
        v-model="input"
        placeholder="请输入内容"
      ></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">添加</el-button>
    </div>
    <!-- 表格区域展示视图数据 -->
    <div class="wrapper">
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="商品ID" width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品名称"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="商品价格"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="商品数量"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="商品类目"
          width="100"
        ></el-table-column>
        <el-table-column prop="name" label="商品图片"></el-table-column>
        <el-table-column prop="name" label="商品卖点"></el-table-column>
        <el-table-column prop="name" label="商品描述"></el-table-column>
        <el-table-column prop="name" label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页区域 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  padding: 20px 10px;
  .good_search {
    width: 85%;
  }
  button {
    margin-left: 20px;
  }
}
.wrapper {
  padding: 20px 10px;
}
</style>
