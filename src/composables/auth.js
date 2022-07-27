import { useCookies } from '@vueuse/integrations/useCookies'
// import { useStore } from 'vuex'
// import { computed } from 'vue'
// const store = useStore()
const TokenKey = 'admin-token'
const tabsList = 'tabs-list'
const cookie = useCookies()

// 获取toekn
export function getToken() {
   return cookie.get(TokenKey)
}
// 设置token
export function setToken(token) {
  return cookie.set(TokenKey, token)
}
// 删除token
export function removeToken() {
  return cookie.remove(TokenKey)
}


// const tags = computed(() => {
//   return store.state.tabsList
// })
// const aa = JSON.stringify(tags)
// 增加tabslist
export function setCookieTabs(tabsList, value) {
  return cookie.set(tabsList, value)
}

// 获取tabslist
export function getCookieTabs() {
  return cookie.get('tabsList')
}
export function removeCookieTags() {
  return cookie.remove('tabsList')
}
