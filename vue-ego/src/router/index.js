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

export default router;
