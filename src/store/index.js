import { createStore } from 'vuex'
import { login, getInfo } from '../api/manager'
import { setToken } from '../composables/auth'
// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: {},
      isCollapse: false,
      tabsList: [
        {
          path: '/location',
          name: 'location',
          label: '主控台',
          icon: 'home'
        },
      ],
      menu: [
        {
          path: '/home',
          name: 'home',
          label: '后台面板',
          icon: 'location',
          url: 'home/index',
          children: [
            {
              path: '/location',
              name: 'location',
              label: '主控台',
              icon: 'location',
              url: 'location'
            }
          ]
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'mall',
          children: [
            {
              path: '/commodity',
              name: 'commodity',
              label: '商品管理',
              icon: 'location',
              url: 'commodity/commodity'
            },
            {
              path: '/cate',
              name: 'cate',
              label: '分类管理',
              icon: 'location',
              url: 'cate/cate'
            },
            {
              path: '/norm',
              name: 'norm',
              label: '规格管理',
              icon: 'location',
              url: 'norm/norm'
            },
            {
              path: '/voucher',
              name: 'voucher',
              label: '优惠卷管理',
              icon: 'location',
              url: 'voucher/voucher'
            },
          ]
        },
        {
          path: '/users',
          name: 'users',
          label: '用户管理',
          icon: 'user',
          url: 'User/index',
          children: [
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'setting',
              url: 'user/user'
            },
            {
              path: '/vip',
              name: 'vip',
              label: '会员管理',
              icon: 'setting',
              url: 'user/vip'
            }
          ]
        },
        {
          path: '/orders',
          name: 'orders',
          label: '订单管理',
          icon: 'user',
          url: 'order',
          children: [
            {
              path: '/order',
              name: 'order',
              label: '订单管理',
              icon: 'setting',
              url: 'order'
            },
            {
              path: '/comment',
              name: 'comment',
              label: '评论管理',
              icon: 'setting',
              url: 'comment'
            }
          ]
        },
        {
          path: '/admins',
          name: 'admin',
          label: '管理员管理',
          icon: 'user',
          url: 'admins',
          children: [
            {
              path: '/admin',
              name: 'admin',
              label: '管理员管理',
              icon: 'admin',
              url: 'admin'
            },
            {
              path: '/competence',
              name: 'competence',
              label: '权限管理',
              icon: 'setting',
              url: 'competence'
            }
          ]
        },
        {
          path: '/system',
          name: 'system',
          label: '系统设置',
          icon: 'user',
          url: 'system',
          children: [
            {
              path: '/basic',
              name: 'basic',
              label: '基础设置',
              icon: 'admin',
              url: 'basic'
            },
            {
              path: '/transaction',
              name: 'transaction',
              label: '交易设置',
              icon: 'setting',
              url: 'transaction'
            },
            {
              path: '/logistics',
              name: 'logistics',
              label: '物流设置',
              icon: 'setting',
              url: 'logistics'
            },
          ]
        },
        {
          path: '/distribution',
          name: 'distribution',
          label: '分销模块',
          icon: 'user',
          url: 'distribution',
          children: [
            {
              path: '/distributor',
              name: 'distributor',
              label: '分销员管理',
              icon: 'admin',
              url: 'distributor'
            },
            {
              path: '/distrisetting',
              name: 'distrisetting',
              label: '分销设置',
              icon: 'setting',
              url: 'distrisetting'
            },
          ]
        },
        {
          path: '/other',
          name: 'other',
          label: '其他模块',
          icon: 'user',
          url: 'other',
          children: [
            {
              path: '/image',
              name: 'image',
              label: '图库管理',
              icon: 'admin',
              url: 'image'
            },
            {
              path: '/placard',
              name: 'placard',
              label: '公告管理',
              icon: 'setting',
              url: 'placard'
            },
          ]
        },
      ],
    }
  },
  mutations: {
   SET_USERINFO(state, user) {
    state.user = user
   },
   changeCollapse(state) {
    console.log(123);
    state.isCollapse = !state.isCollapse
   },
   // 添加tag
   setTabsList(state, tag) {
    const result = state.tabsList.findIndex(item => item.name === tag.name)
    if(result === -1) {
      state.tabsList.push(tag)
    }
   },
   // 删除tag
   closeTag(state, val) {
    const result = state.tabsList.findIndex(item => item.name === val.name)
    state.tabsList.splice(result, 1)
  },
  },
  actions: {
    login({commit}, {username, password}) {
      return new Promise((resolve, reject) => {
        login(username, password).then(res => {
          setToken(res.token)
          resolve(res)
        }).catch(err => reject(err))
      })
    },
    getInfo({commit}) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          commit("SET_USERINFO", res)
          resolve(res)
        }).catch(err => reject(err))
      })
    }
  }
})
export default store
