import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置element-plus 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 配置windecss
import WindiCSS from 'vite-plugin-windicss'

// 引入配置路径模块
// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     "~": path.resolve(__dirname, "src") // 配置scr别名
  //   }
  // },
  plugins: [
    vue(),
    WindiCSS(),
    // 配置element-plus自动导入
    AutoImport({ resolvers: [ElementPlusResolver()]}),
    Components({ resolvers: [ElementPlusResolver()]}),
  ],

  // 配置跨域
  server: {
    proxy: {
      // 用/api代替接口地址
      '/api': {
        target: 'http://ceshi13.dishait.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
