<template>
  <el-aside width="auto" class="aside">
    <el-menu active-text-color="#ffd04b" background-color="#fff" class="el-menu-vertical-demo" default-active="2"
      text-color="black" @open="handleOpen" @close="handleClose" :collapse="isCollapse" width="300px" unique-opened>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>后台面板</span>
        </template>
        <el-menu-item index="">
          <el-icon>
            <Aim />
          </el-icon>
          主控台
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <Briefcase />
          </el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item index="2-1">商品管理</el-menu-item>
        <el-menu-item index="2-2">分类管理</el-menu-item>
        <el-menu-item index="2-3">规格管理</el-menu-item>
        <el-menu-item index="2-4">优惠卷管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon>
            <Avatar />
          </el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="3-1">用户管理</el-menu-item>
        <el-menu-item index="3-2">会员等级</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>订单管理</span>
        </template>
        <el-menu-item index="4-1">订单管理</el-menu-item>
        <el-menu-item index="4-2">评论管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>管理员管理</span>
        </template>
        <el-menu-item index="5-1">管理员管理</el-menu-item>
        <el-menu-item index="5-2">权限管理</el-menu-item>
        <el-menu-item index="5-3">角色管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>系统设置</span>
        </template>
        <el-menu-item index="6-1">基础设置</el-menu-item>
        <el-menu-item index="6-2">交易设置</el-menu-item>
        <el-menu-item index="6-3">物流设置</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>分销模块</span>
        </template>
        <el-menu-item index="7-1">分销员管理</el-menu-item>
        <el-menu-item index="7-2">分销设置</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="8">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>其他模块</span>
        </template>
        <el-menu-item index="8-1">图库管理</el-menu-item>
        <el-menu-item index="8-2">公告管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import {Aim, Avatar, Location, Briefcase, Expand} from '@element-plus/icons-vue'
import {computed, ref} from 'vue'
// import store from '../store'
import { useStore} from 'vuex';
const store = useStore()
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

const isCollapse = computed(() => {
  return store.state.isCollapse
})
</script>

<style lang="scss" scoped>
.aside {
  overflow: hidden;
  background-color: #fff;
  display: flex;
  height: 100%;
  .el-menu {
    max-height: 100%;
  }

  .el-menu-item {
    padding-left: 60px;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
