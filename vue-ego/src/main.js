import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "css/reset.css";
import api from "./api/index";
import i18n from "./language/index";
import "./router/permission";
import "./utils/localStorage";
Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount("#app");
