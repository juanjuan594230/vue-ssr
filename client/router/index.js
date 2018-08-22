import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default () => {
  return new Router({
    routes: [
      {
        path: '/',
        component: () => import('../views/todo/todo.vue')
      },
      {
        path: '/login',
        component: () => import('../views/login/login.vue')
      }
    ],
    mode: 'history'
  });
};
