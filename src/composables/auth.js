import { useCookies } from '@vueuse/integrations/useCookies'

const TokenKey = 'admin-token'
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