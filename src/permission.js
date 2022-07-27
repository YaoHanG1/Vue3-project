import router from './router/index'
import { getToken } from './composables/auth'
import { toast } from './composables/util'
import store from './store'

// 路由跳转进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  
  const token = getToken()
  // 没有token会强制跳转登陆页
  if(!token && to.path != "/login") {
    toast('请先登陆', '')
    return next({path: "/login"})
  }
  // 防止重复登陆
  if(token && to.path == "/login") {
    toast('请勿重复登陆', '')
    return next({path: from.path? from.path: '/'})
  }

  // 如果登陆了，自动获取用户信息
  if(token) {
    await store.dispatch('getInfo')
  }
  NProgress.start() 
  next()
})


router.afterEach(() => {
  NProgress.done() // 进度条结束
})
