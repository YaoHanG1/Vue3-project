import axios from '../axios.js'

// 登陆
export function login(username, password) {
  return axios.post("/admin/login", {
    username,
    password
  })
}

// 获取用户信息
export function getInfo() {
  return axios.post("/admin/getinfo")
}


export function getPanels() {
  return axios.get("admin/statistics1")
}

export function getEchartsData(date) {
  return axios.get(`admin/statistics3?type=${date}`)
}

export function getShopDeal() {
  return axios.get('admin/statistics2')
}