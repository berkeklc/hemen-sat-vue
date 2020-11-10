import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/cardetail",
    name: "Cardetail",

    component: () =>
      import(/* webpackChunkName: "cardetail" */ "../views/cardetail")
  },
  {
    path: "/login",
    name: "Login",

    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login")
  },
  {
    path: "/profile",
    name: "Profile",

    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile"),
    children: [
      {
        path: "contact",
        name: "ProfileContact",
        component: () =>
          import(/* webpackChunkName: "contact" */ "../views/profile/contact")
      },
      {
        path: "edit",
        name: "ProfileEdit",
        component: () =>
          import(/* webpackChunkName: "edit" */ "../views/profile/edit")
      },
      {
        path: "favorite",
        name: "ProfileFavorite",
        component: () =>
          import(/* webpackChunkName: "favorite" */ "../views/profile/favorite")
      },
      {
        path: "help",
        name: "ProfileHelp",
        component: () =>
          import(/* webpackChunkName: "help" */ "../views/profile/help")
      },
      {
        path: "invite",
        name: "ProfileInvite",
        component: () =>
          import(/* webpackChunkName: "invite" */ "../views/profile/invite")
      },
      {
        path: "offer",
        name: "ProfileOffer",
        component: () =>
          import(/* webpackChunkName: "offer" */ "../views/profile/offer")
      },
      {
        path: "password",
        name: "ProfilePassword",
        component: () =>
          import(/* webpackChunkName: "password" */ "../views/profile/password")
      },
      {
        path: "payment",
        name: "ProfilePayment",
        component: () =>
          import(/* webpackChunkName: "contact" */ "../views/profile/payment")
      },
      {
        path: "purchase",
        name: "ProfilePurchase",
        component: () =>
          import(/* webpackChunkName: "purchase" */ "../views/profile/purchase")
      },
      {
        path: "tender",
        name: "ProfileTender",
        component: () =>
          import(/* webpackChunkName: "tender" */ "../views/profile/tender")
      },
      {
        path: "vend",
        name: "ProfileVend",
        component: () =>
          import(/* webpackChunkName: "vend" */ "../views/profile/vend")
      }
    ]
  },
  {
    path: "/elements",
    name: "Elements",

    component: () =>
      import(/* webpackChunkName: "element" */ "../views/Elements.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
