import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
  };

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile/profile'),
  },
  {
    path: '/singUp',
    name: 'singUp',
    component: () => import('../views/singUp/singUp'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login'),
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/editor/editor'),
  },
  {
    path: '/errorPage',
    name: 'errorPage',
    component: () => import('../views/errorPage/errorPage'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});
export default router;
