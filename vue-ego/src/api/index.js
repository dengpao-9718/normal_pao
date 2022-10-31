/**
 * 请求方法
 */
import axios from "axios";
import base from "./base";
//post不支持json格式
//node>js
const qs = require("qs");
const api = {
  /**
   * 登录接口
   */
  getLogin(params) {
    //params={username:'',password:''}
    return axios.post(base.login, qs.stringify(params));
  },
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
  /**
   * 添加商品
   * 参数： title cid  category sellPoint price num descs paramsInfo image
   */
  addGoods(params) {
    // = {}
    return axios.get(base.addGoods, {
      params,
    });
  },
  /**
   * 删除商品 id
   */
  deleteGoods(params) {
    return axios.get(base.deleteGoods, {
      params,
    });
  },
  /**
   * 编辑商品id
   */
  updateGoods(params) {
    return axios.get(base.updateGoods, {
      params,
    });
  },
  /**
   * 销量对比
   */
  getSellTotal(parmas) {
    return axios.get(base.sellTotal, {
      parmas,
    });
  },
};
export default api;
