import { createRouter, createWebHashHistory } from "vue-router";

import Index from '../pages/index.vue'
import Login from '../pages/login.vue'
import NotFound from '../pages/404.vue'


const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/location',
    children: [
      // 页面
      {
        path: '/location',
        name: 'location',
        component: () => import('../pages/location.vue')
      },
      {
        path: '/basic',
        name: 'basic',
        component: () => import('../pages/basic.vue')
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../pages/admin.vue')
      },
      {
        path: '/cate',
        name: 'cate',
        component: () => import('../pages/cate.vue')
      },
      {
        path: '/comment',
        name: 'comment',
        component: () => import('../pages/comment.vue')
      },
      {
        path: '/commodity',
        name: 'commodity',
        component: () => import('../pages/commodity.vue')
      },
      {
        path: '/competence',
        name: 'competence',
        component: () => import('../pages/competence.vue')
      },
      {
        path: '/rote',
        name: 'rote',
        component: () => import('../pages/rote.vue')
      },
      {
        path: '/distributor',
        name: 'distributor',
        component: () => import('../pages/distributor.vue')
      },
      {
        path: '/distrisetting',
        name: 'distrisetting',
        component: () => import('../pages/distrisetting.vue')
      },
      {
        path: '/image',
        name: 'image',
        component: () => import('../pages/image.vue')
      },
      {
        path: '/logistics',
        name: 'logistics',
        component: () => import('../pages/logistics.vue')
      },
      {
        path: '/norm',
        name: 'norm',
        component: () => import('../pages/norm.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../pages/order.vue')
      },
      {
        path: '/placard',
        name: 'placard',
        component: () => import('../pages/placard.vue')
      },
      {
        path: '/transaction',
        name: 'transaction',
        component: () => import('../pages/transaction.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../pages/user.vue')
      },
      {
        path: '/vip',
        name: 'vip',
        component: () => import('../pages/vip.vue')
      },
      {
        path: '/voucher',
        name: 'voucher',
        component: () => import('../pages/voucher.vue')
      },
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router