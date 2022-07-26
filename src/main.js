import { createApp } from 'vue'
import 'virtual:windi.css'
import router from './router'
import ECharts from 'vue-echarts'
import "echarts"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 引入前置路由守卫
import './permission'

import store from './store/index'
import App from './App.vue'
app.use(router).use(store).component('v-chart', ECharts).mount('#app')
