<template>
  <el-aside width="auto" class="aside">
    <el-menu active-text-color="#ffd04b" background-color="#fff" class="el-menu-vertical-demo"
      :default-active="route.name" text-color="black" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
      width="300px" unique-opened :router="true">
      <el-sub-menu :index="item.name + ''" v-for="item in menu" :key="item.label">
        <template #title>
          <component :is="item.icon" class="icon"></component>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="item2.name + ''" v-for="item2 in item.children" :key="item2.label" @click="settag(item2)">
            <component :is="item2.icon" class="icon"></component> 
            {{ item2.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { Aim, Avatar, Location, Briefcase, Expand } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
const route = useRoute()
const store = useStore()
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath)
}

const settag = (item2) => {
  store.commit('setTabsList', item2)
}

let menu = computed(() => {
  return store.state.menu
})
let isCollapse = computed(() => {
  return store.state.isCollapse
})

</script>

<style lang="scss" scoped>
.aside {
  overflow: hidden;
  background-color: #fff;
  display: flex;
  height: 100%;

  .icon {
    width: 18px;
    margin-right: 5px;
  }

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
