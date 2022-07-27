<template>
 
  <el-header>
    <div class="container-header">
      <div class="header-left">风知道往哪走</div>
      <div class="header-right">
        <el-button @click="changeColl">
          <el-icon style="width: 1em; height: 1em">
            <Expand />
          </el-icon>
        </el-button>
        <el-dropdown trigger="click" size="mini">
          <span class="header-right-item">
            <img class="user" src="../assets/me.jpg" alt="">
            <span>个人中心</span>
            <el-icon>
              <ArrowDownBold />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click="open">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>

<script setup>
import { Expand, ArrowDownBold } from '@element-plus/icons-vue'
import { useStore } from 'vuex';
import {logout} from '../api/manager'
import {removeToken,removeCookieTags} from '../composables/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()

function changeColl() {
  store.commit('changeCollapse')
}

const open = () => {
  ElMessageBox.confirm(
    '是否要退出登录',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      logout()
      
      router.replace({
        path: '/login'
      })
      ElMessage({
        type: 'success',
        message: '退出成功',
      })
      removeToken()
      removeCookieTags()
    })
    // .catch(() => {
    //   ElMessage({
    //     type: 'info',
    //     message: 'Delete canceled',
    //   })
    // })
}
</script>

<style lang="scss" scoped>
.container-header {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;

  .header-left {
    min-width: 200px;
    align-content: center;
    font-weight: bold;
    font-size: 26px;
    text-align: center
  }

  ;

  .header-right {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    .header-right-item {
      display: flex;
      align-items: center;
      margin-right: 10px
    };
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}



.el-header {
  padding: 0
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
