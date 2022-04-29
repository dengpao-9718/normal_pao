/**
 * 请求方法
 */
import axios from "axios";
import base from "./base";
const api = {
  /**
   *商品列表
   */
  getGoodsList(params) {
    return axios.get(base.goodsList, {
      params,
    });
  },
  /**
   * 搜索商品数据
   */
  getSearch(params) {
    //search:xx
    return axios.get(base.search, { params });
  },
  /**
   * 获取类目选择
   * {id:cid}
   */
  getSelectCategory(params) {
    return axios.get(base.selectCategory, { params });
  },
};
export default api;
