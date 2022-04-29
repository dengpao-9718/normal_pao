<template>
  <div>
    <!-- 
      ref="upload"                      可以获取到dom元素
      action=""                         action	必选参数，上传的地址	string  图片上传地址
      :on-preview="handlePreview"       on-preview	点击文件列表中已上传的文件时的钩子	function(file)
      :on-remove="handleRemove"         on-remove	文件列表移除文件时的钩子	function(file, fileList)
      on-success	文件上传成功时的钩子	 function(response, file, fileList)	
      on-error	文件上传失败时的钩子	   function(err, file, fileList)
      :file-list="fileList"             file-list	上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]	array
      :auto-upload="false"              auto-upload	是否在选取文件后立即进行上传	boolean默认true
     -->
    <el-upload
      class="upload-demo"
      ref="upload"
      :action="url"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-success="successUpload"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitUpload"
        >上传到服务器</el-button
      >
    </el-upload>
  </div>
</template>

<script>
import base from "@/api/base";
export default {
  data() {
    return {
      url: base.uploadUrl, //图片服务器地址
      fileList: [],
    };
  },
  methods: {
    //点击实现上传   --submit()	手动上传文件列表
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    successUpload(response, file, fileList) {
      this.$message({
        message: "上传成功",
        type: "success",
      });
      console.log(response);
      console.log(file);
      console.log(fileList);
      let imgUrl = base.host + "/" + response.url.slice(7);
      this.$emit("sendImg", imgUrl);
      //成功的数据接口，response传递给 父组件
    },
  },
};
</script>

<style></style>
