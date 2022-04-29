/**
 * 接口路径配置
 * 一般文件目录:base.js index.js
 */
const path = "http://192.168.7.181:9527/api";
const base = {
  goodsList: path + "/projectList", //商品列表
  search: path + "/search", //商品搜索
  selectCategory: path + "/backend/itemCategory/selectItemCategoryByParentId", //类目选择
};
export default base;
