/**
 * 接口路径配置
 * 一般文件目录:base.js index.js
 */
const path = "http://127.0.0.1:9527/api";
const base = {
  host: "http://127.0.0.1:9527",
  goodsList: path + "/projectList", //商品列表
  search: path + "/search", //商品搜索
  selectCategory: path + "/backend/itemCategory/selectItemCategoryByParentId", //类目选择
  uploadUrl: path + "/upload", //图片上传post请求
  addGoods: path + "/backend/item/insertTbItem", //添加商品
};
export default base;
