import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "css/reset.css";
import api from "./api/index";
import i18n from "./language/index";
Vue.prototype.$api = api;
Vue.config.productionTip = false;
//持久化
let user = localStorage.getItem("user");
if (user) {
  user = JSON.parse(user);
  store.commit("loginModule/setUser", user);
}
new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount("#app");
