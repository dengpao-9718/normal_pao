<template>
  <div>
    <!--  
      title="添加商品" 弹框的标题
      :visible.sync="dialogVisible" 控制弹窗显示隐藏 Boolean true显示
      width="70%" 宽度大小
    -->
    <el-dialog title="添加商品" :visible.sync="dialogVisible" width="70%">
      <div class="myForm">
        <el-form
          :model="goodsForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="类目选择" prop="categroy">
            <el-button type="primary">类目选择</el-button>
          </el-form-item>
          <el-form-item label="商品名称" prop="title">
            <el-input v-model="goodsForm.title"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="price">
            <el-input v-model="goodsForm.price"></el-input>
          </el-form-item>
          <el-form-item label="商品数量" prop="num">
            <el-input v-model="goodsForm.num"></el-input>
          </el-form-item>
          <el-form-item label="发布时间">
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="goodsForm.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2" style="text-align: center">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="goodsForm.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="商品卖点" prop="sellPoint">
            <el-input v-model="goodsForm.sellPoint"></el-input>
          </el-form-item>
          <el-form-item label="商品图片" prop="image">
            <el-button type="primary">上传图片</el-button>
          </el-form-item>
          <el-form-item label="商品描述" prop="descs">
            <textarea name="desc" id="" cols="30" rows="10"></textarea>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('goodsForm')"
              >确定</el-button
            >
            <el-button @click="resetForm('goodsForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // props: {
  //   dialogVisible: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      dialogVisible: false,
      goodsForm: {
        //表单容器-对象
        title: "", //商品名称
        price: "", //商品价格
        num: "", //商品数量
        sellPoint: "", //卖点
        image: false, //图片
        descs: [],
        categroy: "",
        date1: "", //商品时间
        date2: "", //商品时间
      },
      rules: {
        //校验规则
        title: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 9 个字符", trigger: "blur" },
        ],
        price: [{ required: true, message: "请输入价格", trigger: "change" }],
        num: [
          { required: true, message: "请输入数量", trigger: "change" },
          {
            min: 1,
            max: 999999999,
            message: "请输入至少一个",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    //自定义时间--通知父组件修改变量--修改dialogVisible
    close() {
      this.$emit("changeDialog");
    },
  },
};
</script>

<style></style>
