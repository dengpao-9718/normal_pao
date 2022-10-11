import Vue from "vue";
import VueI18n from "vue-i18n";
import Element from "element-ui";
import enLocale from "element-ui/lib/locale/lang/en";
import zhLocale from "element-ui/lib/locale/lang/zh-CN";
Vue.use(VueI18n);
//准备语言

const messages = {
  //1.英文
  en: {
    menu: {
      home: "home",
      goods: "Goods Manage",
      parmas: "Specification",
    },
    //导入element-ui里面的国际化语言
    ...enLocale,
  },

  //2.中文
  zh: {
    menu: {
      home: "首页",
      goods: "商品管理",
      parmas: "规格参数",
    },
    ...zhLocale,
  },
};
const i18n = new VueI18n({
  local: "en", //当前选中的语言
  messages, //语言环境
});
//兼容写法
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value),
});

//3. 导出i18n
export default i18n;
