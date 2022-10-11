import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "views/Layout/index.vue";
import Login from "views/Login/login.vue";
import Home from "views/Home/home.vue";

// const Goods = () => import("views/Goods/Goods.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Layout,
    //路由元信息
    meta: {
      isLogin: true,
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/goods",
        name: "Goods",
        component: () => import("views/Goods/Goods.vue"),
      },
      {
        path: "/add-goods",
        name: "AddGoods",
        //子级路由
        component: () => import("views/Goods/AddGoods.vue"),
      },
      {
        path: "/params",
        name: "Params",
        component: () => import("views/Params/Params.vue"),
      },
      {
        path: "/order",
        name: "Order",
        redirect: "/order/orderList",
        component: () => import("views/Order/Order.vue"),
        children: [
          {
            path: "orderList",
            name: "OrderList",
            component: () => import("views/Order/OrderList/OrderList.vue"),
          },
          {
            path: "orderBack",
            name: "OrderBack",
            component: () => import("views/Order/OrderBack/OrderBack.vue"),
          },
        ],
      },
      {
        path: "/advert",
        name: "Advert",
        component: () => import("views/Advert/Advert.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//获取vuex数据
import store from "../store/index";

router.beforeEach((to, from, next) => {
  console.log("----to---", to);
  console.log("----from---", from);
  //1.判断是否需要登录
  if (to.matched.some((ele) => ele.meta.isLogin)) {
    console.log(222);
    //2.判断当前的用户是否已经登录
    let token = store.state.loginModule.userinfo.token;
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else {
    //不需要登录
    next();
  }
});

export default router;
