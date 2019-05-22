import { About, Home, Profile } from '@/views';
import firebase from 'firebase/app';
import 'firebase/auth';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresGuest: false,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresGuest: false,
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresGuest: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
